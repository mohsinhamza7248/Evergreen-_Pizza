import NextAuth, { SessionStrategy, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import { User } from "@/app/models/User";
import bcrypt from "bcrypt";
import clientPromise from "@/libs/mongoConnect";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { randomUUID } from "crypto";

const adapter = MongoDBAdapter(clientPromise);

const session = {
  strategy: "jwt" as SessionStrategy,
  maxAge: 30 * 24 * 60 * 60, // 30 days
};

export const authOptions = {
  secret: process.env.SECRET,
  adapter,
  session,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials!.email;
        const password = credentials!.password;

        await mongoose.connect(process.env.MONGODB_URI!);
        const user = await User.findOne({ email });

        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user }: any) {
      if (trigger === "update" && session.user.name) {
        token.name = session.user.name;
      }
      if (trigger === "update" && session.user.image) {
        token.picture = session.user.image;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = {
        name: token.name,
        email: token.email,
        image: token.picture,
      };
      return session;
    },
    async signIn({ user, account }: any) {
      if (account.provider === "credentials") {
        if (user && "id" in user && adapter?.createSession) {
          const sessionToken = randomUUID();
          const sessionExpiry = new Date(Date.now() + session.maxAge * 1000);

          await adapter.createSession({
            sessionToken: sessionToken,
            userId: user.id,
            expires: sessionExpiry,
          });
        }
      }
      return true;
    },
  },
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) return false;

  await mongoose.connect(process.env.MONGODB_URI!);
  const user = await User.findOne({ email: userEmail });
  if (!user) return false;

  return user.isAdmin;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
