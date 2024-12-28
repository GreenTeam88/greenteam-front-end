import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

import { Header } from '@/components/layout/header';
import { cn } from '@/lib/tailwind';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { Footer } from '@/components/layout/footer/foooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Green Team`,
  description: `Green Team ...`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* header is fixed so we need to have a padding top  */}
      <body className={cn(inter.className, 'flex lg:pt-[220px] px-0 flex-col  items-center')}>
        <Header />
        <div className="w-full z-30">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
