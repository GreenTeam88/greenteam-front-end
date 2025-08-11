import { Metadata } from 'next';

import { Header } from '@/components/layout/header/header';

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
    <>
      <Header />
      {children}
    </>
  );
}
