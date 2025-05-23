import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AppContextProvider } from "../util/ContextProvider";
import { Toaster } from 'react-hot-toast'
import PrelineScript from '@/util/PrelineScript';
import { UIProvider } from '@/util/UIProvider';
import AuthProvider from '@/util/AuthProvider';

export const metadata: Metadata = {
  title: 'EverGreen Pizza: Order Delicious Pizzas Online',
  description: 'Welcome to EverGreen, where every order is a celebration of flavors!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth dark'>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-[url('/assets/bg_dark.jpg')] bg-repeat bg-fixed">
        <AuthProvider>
          <UIProvider>
            <AppContextProvider>
              <Toaster />
              <Header />
              {children}
              <Footer />
            </AppContextProvider>
          </UIProvider>
        </AuthProvider>
      </body>
      <PrelineScript />
    </html>
  )
}