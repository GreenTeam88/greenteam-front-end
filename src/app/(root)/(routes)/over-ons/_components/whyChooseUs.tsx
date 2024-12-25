'use client';

import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';

import { StandardCard, StandardCardInfo } from '@/components/cards/infoCards';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

type TabInfo = { name: string; src: string; paragraph: string };
const tabsInfo: TabInfo[] = [
  {
    name: '20 jaar ervaring',
    src: '/aboutUs/star.svg',
    paragraph:
      'Met twee decennia aan expertise in het renoveren van trappen en vloeren, zijn we uitgegroeid tot een betrouwbare partner voor hoogwaardige interieurprojecten. Onze expertise strekt zich uit over een breed scala aan materialen en stijlen, waardoor we voor elke ruimte de perfecte oplossing kunnen bieden. Dankzij onze jarenlange ervaring kunnen we vakmanschap, precisie en duurzaamheid garanderen bij elk project dat we uitvoeren.',
  },
  {
    name: 'Kwaliteit',
    src: '/aboutUs/done.svg',
    paragraph:
      'Kwaliteit staat bij ons hoog in het vaandel. We streven ernaar om bij elk project de hoogste standaard te bereiken, van de selectie van de beste materialen tot de afwerking met oog voor detail. Ons team van ervaren vakmensen zet zich volledig in om uitmuntend vakwerk te leveren dat voldoet aan de verwachtingen van onze klanten. We geloven dat kwaliteit de basis is van langdurige klanttevredenheid en daarom is dit de kern van alles wat we doen.',
  },
  {
    name: 'Duurzaam',
    src: '/aboutUs/heart.svg',
    paragraph:
      'Duurzaamheid is een belangrijk onderdeel van onze werkwijze. We kiezen bewust voor milieuvriendelijke materialen en technieken die de impact op het milieu minimaliseren. Door duurzame keuzes te maken, dragen we bij aan een betere toekomst en zorgen we ervoor dat onze projecten niet alleen nu, maar ook in de toekomst van waarde blijven. We streven ernaar om verantwoorde keuzes te maken die zowel goed zijn voor onze klanten als voor de planeet. We heten niet voor niets GreenTeam!',
  },
  {
    name: 'Op maat',
    src: '/aboutUs/cards.svg',
    paragraph:
      'Bij GreenTeam geloven we in maatwerk. Ieder project is uniek, en daarom bieden wij oplossingen die precies aansluiten bij de wensen en behoeften van onze klanten. Of het nu gaat om een traprenovatie, een nieuwe vloer, of een complete verbouwing, wij luisteren goed naar uw wensen en vertalen deze naar een perfect passend ontwerp. Met onze flexibele aanpak en oog voor detail zorgen we ervoor dat elk project persoonlijk en uniek is. Uw visie is onze uitdaging, en wij zetten ons in om deze tot in de puntjes te realiseren. Geen standaardoplossingen, maar maatwerk dat volledig aansluit bij uw wensen.',
  },
];

const cardsInfos: StandardCardInfo[] = [
  {
    title: 'Je vloer of trap wordt stofvrij geschuurd',
    paragraph:
      'Ons team neemt alleen genoegen met het beste resultaat. Daarom werken wij bij GreenTeam met de meest hoogwaardige en duurzame machines en producten en hebben wij voor elke behandeling ook een passende machine en werkwijze. Maak je vooral geen zorgen over troep of stof na het schuren, want al onze machines zijn aangesloten op professionele stofzuigers. Op deze manier wordt jouw vloer geheel stofvrij geschuurd.',
    img: '/aboutUs/floorMachineCleaning.png',
  },
  {
    title: 'Behandelingen op maat',
    paragraph:
      'Er zijn verschillende mogelijkheden voor de afwerking van een vloer na het schuren. Wij zorgen altijd voor de behandeling die het beste past bij de vloer en aansluit op jouw wensen. Er is keuze uit lak, olie of hardwax in verschillende kleuren. Hierbij zullen de gepassioneerde vakmannen van Green Team je altijd adviseren voor het maken van de beste keuze.',
    img: '/aboutUs/floorPaperCleaning.png',
  },
];

const IconCard: React.FC<TabInfo & { setCurrTab?: Dispatch<SetStateAction<string>>; currTab?: string }> = ({
  name,
  src,
  currTab,
  setCurrTab,
}) => {
  return (
    <>
      <div
        onMouseOver={() => setCurrTab && setCurrTab(name)}
        className={'flex  items-center flex-col gap-2 lg:gap-[22px] cursor-pointer'}
      >
        <div
          className={clsx(
            'rounded-full border-black10 border-opacity-10   border-2 w-[120px] flex items-center justify-center h-[120px]',
            {
              'border-primaryDefault border-opacity-100': currTab == name,
            }
          )}
        >
          <img src={src} />
        </div>
        <HeadlineSemibold>{name}</HeadlineSemibold>
      </div>
    </>
  );
};

const TabsSection = () => {
  const [currTab, setCurrTab] = useState(tabsInfo[0].name);
  return (
    <>
      {/* view for desktop */}
      <div className="hidden lg:flex flex-col items-center px-5 py-28 gap-[55px]">
        <H2 className="text-primaryDefault">Waarom voor ons kiezen?</H2>
        <div className="flex gap-[88px] max-w-full flex-wrap  w-full justify-center">
          {tabsInfo.map((info) => (
            <IconCard currTab={currTab} setCurrTab={setCurrTab} key={info.name} {...info} />
          ))}
        </div>
        <div className="flex flex-col px-3 lg:px-0 gap-8 lg:w-[798px]">
          <BodyText className="text-[13px]">
            {' '}
            {tabsInfo.find((tabInfo) => tabInfo.name === currTab)?.paragraph}
          </BodyText>
        </div>
      </div>
      {/* view for mobile */}
      <div className=" flex lg:hidden flex-col  items-center gap-4 ">
        <H2 className="text-primaryDefault text-center">Waarom voor ons kiezen?</H2>

        {tabsInfo.map((cardInfo) => (
          <div key={cardInfo.name} className="flex flex-col py-3 gap-4 items-center">
            <IconCard {...cardInfo} />
            <BodyText className="text-center">{cardInfo.paragraph}</BodyText>
          </div>
        ))}
      </div>
    </>
  );
};

export const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center px-5 py-11 lg:py-28 gap-[55px]">
      <TabsSection />
      <div className="flex py-16 flex-col items-center gap-12 lg:gap-[34px]">
        {cardsInfos.map((cardInfo, index) => (
          <div
            key={cardInfo.title}
            className={cn({ 'lg:-translate-x-24': index % 2 === 0, 'lg:translate-x-24': index % 2 === 1 })}
          >
            <StandardCard {...cardInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};
