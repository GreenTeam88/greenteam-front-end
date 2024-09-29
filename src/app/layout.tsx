import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { cn } from '@/lib/tailwind';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Green Team`,
  description: `Green Team ...`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex flex-col items-center')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
