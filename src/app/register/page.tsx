// src/app/register/page.tsx
"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import ModalContainer from "@/components/common/ModalContainer";
import { Button } from "@nextui-org/react";
import PasswordInput from "@/components/common/form/PasswordInput";
import EmailInput from "@/components/common/form/EmailInput";
import NameInput from "@/components/common/form/NameInput";
// ... your other imports

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ ...status, loading: true, error: '' });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setStatus({ ...status, loading: false, success: true });
      // Optionally auto-login after registration
      // await signIn('credentials', { email, password, redirect: false });

    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'Registration failed'
      });
    }
  }

  return (
    <section className="pt-12 pb-20">
      <h1 className="text-center text-primary text-4xl my-4">Sign Up</h1>

      <form
        className="flex flex-col gap-2 max-w-lg mx-auto mt-12"
        onSubmit={handleSubmit}
      >
        <NameInput
          nameValue={formData.name}
          setName={(value) => setFormData({ ...formData, name: value })}
          disabled={status.loading}
          className="mb-4"
        />

        <EmailInput
          emailValue={formData.email}
          setEmail={(value) => setFormData({ ...formData, email: value })}
          disabled={status.loading}
          className="mb-4"
        />

        <PasswordInput
          passwordValue={formData.password}
          setPassword={(value) => setFormData({ ...formData, password: value })}
          disabled={status.loading}
        />

        {status.error && (
          <div className="text-danger my-2">{status.error}</div>
        )}

        <Button
          type="submit"
          color="primary"
          fullWidth
          isLoading={status.loading}
          className="font-semibold"
        >
          Sign Up
        </Button>

        {/* ... rest of your form */}
      </form>


    </section>
  );
};

export default RegisterPage;