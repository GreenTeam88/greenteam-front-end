import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

import { Header } from '@/components/layout/header/header';
import { cn } from '@/lib/tailwind';

import 'bootstrap-icons/font/bootstrap-icons.css';

import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

import { Footer } from '@/components/layout/footer/foooter';
import { AppProviders } from '@/providers';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'GreenTeam - Duurzame Vloeren en Trappen',
  description:
    'GreenTeam is gepassioneerd over vloeren en trappen, met een sterke focus op duurzaamheid. Oorspronkelijk houtbewerkers, hebben we ons gespecialiseerd in het renoveren van vloeren en trappen, waarbij kwaliteit en klanttevredenheid altijd centraal staan. Wij combineren vakmanschap met milieuvriendelijke innovaties, en leveren elke keer weer een resultaat dat onze beloftes overtreft. Bij GreenTeam draait alles om betrouwbaarheid, duurzaamheid, en het respect voor zowel mensen als het milieu.',
  openGraph: {
    title: 'GreenTeam - Duurzame Vloeren en Trappen',
    description:
      'GreenTeam is gepassioneerd over vloeren en trappen, met een sterke focus op duurzaamheid. Oorspronkelijk houtbewerkers, hebben we ons gespecialiseerd in het renoveren van vloeren en trappen, waarbij kwaliteit en klanttevredenheid altijd centraal staan. Wij combineren vakmanschap met milieuvriendelijke innovaties, en leveren elke keer weer een resultaat dat onze beloftes overtreft. Bij GreenTeam draait alles om betrouwbaarheid, duurzaamheid, en het respect voor zowel mensen als het milieu.',
    url: 'https://www.greenteam.nl',
    images: 'https://www.greenteam.nl/og-image.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* google tags manager code  */}
        <GoogleTagManager gtmId="GTM-TXKVLDJ" />
      </head>
      <body className={cn(inter.className, 'flex lg:pt-[220px] px-0 flex-col  items-center')}>
        {/* google manager code      */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXKVLDJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>{' '}
        {/* wraping all the app logic inside a component that has all the other wrapers such as react query  */}
        <AppProviders>
          {/* header is fixed so we need to have a padding top  */}
          <Header />
          {children}
          <Footer />
        </AppProviders>
        {/* the script for roomvo */}
        <Script
          async
          id="roomvoAssistant"
          type="text/javascript"
          data-locale="nl-nl"
          data-position="middle-right"
          src="https://www.roomvo.com/static/scripts/b2b/common/assistant.js"
        ></Script>
      </body>
    </html>
  );
}
