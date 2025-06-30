import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard',
  description: 'A beautiful Next.js dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthProvider>{
          children}
        </AuthProvider>
        
        </body>
    </html>
  );
}