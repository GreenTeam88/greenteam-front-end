import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

import { Header } from '@/components/layout/header';
import { cn } from '@/lib/tailwind';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { Footer } from '@/components/layout/footer/foooter';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Green Team',
  description: 'Green Team',
  openGraph: {
    title: 'Green Team',
    description: 'Green Team',
    url: 'Green Team',
    images: 'https://www.greenteam.nl//favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* google manager code  */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TXKVLDJ');`,
          }}
        />
      </head>
      <body className={cn(inter.className, 'flex lg:pt-[220px] px-0 flex-col  items-center')}>
        {/* header is fixed so we need to have a padding top  */}
        <Header />
        {children}
        <Footer />
        {/* google manager code      */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXKVLDJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
