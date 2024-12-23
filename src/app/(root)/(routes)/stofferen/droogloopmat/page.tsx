import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Droogloopmat',
    imgSrc: '/stofferen/droogloopmat/droogloopmat-2.png',
    paragraphs: [
      <div key="1">Met een droogloopmat geeft u uw entree een nieuwe look én verbetert u de functionaliteit: </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Effectieve bescherming: Houd vuil en vocht buiten, zodat uw interieur schoon blijft. </li>
        <li>Stijvolle uitstraling: Kies uit een breed scala aan kleuren en designs die passen bij uw interieur. </li>
        <li>
          Praktisch en duurzaam: Gemaakt van hoogwaardige materialen die lang meegaan, zelfs bij intensief gebruik.{' '}
        </li>
        <li>
          Compleet op maat: Of u nu een klassiek design wenst of een moderne look, wij leveren de perfecte droogloopmat.
        </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is een droogloopmat en waarvoor dient het?',
    answer:
      'Een droogloopmat is ontworpen om vocht en vuil van schoenen op te vangen, waardoor het interieur schoner blijft en de vloer beschermd is.',
  },
  {
    question: 'Welke materialen zijn het beste voor droogloopmatten?',
    answer:
      'Droogloopmatten zijn vaak gemaakt van absorberende materialen zoals microvezel, rubber of synthetische vezels, die helpen bij het vasthouden van water en vuil.',
  },
  {
    question: 'Hoe onderhoud ik een droogloopmat?',
    answer:
      'Regelmatig stofzuigen en af en toe wassen of reinigen met water en milde zeep houdt de droogloopmat in optimale conditie. Sommige matten kunnen ook in de wasmachine.',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen of, indien gewenst, contant betalen. Op dit moment is het helaas nog niet mogelijk om op locatie te pinnen, maar we streven ernaar dit in de nabije toekomst aan te bieden.',
  },
  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn. Het is ook belangrijk dat de ruimte goed toegankelijk is, omdat we vaak werken met zware professionele machines die naar de werkplek gebracht moeten worden. ',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Zoals al eerder vermeld hebben wij al 20 jaar aan ervaring en hebben wij stoffeerders en parketteurs die
      jarenlange kennis en ervaring met zich meebrengen om zo uw entree weer de perfecte uitstraling te geven!{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/droogloopmat/droogloopmat-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/stofferen/hero.png" />
      <ListCard
        sectionName="Stofferen"
        pageName="Droogloopmat"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/droogloopmat/droogloopmat-1.png"
        orangeText=" Geen zorgen, wij hebben dé oplossing! "
      />
      <CardsSection
        bottomText="Klaar voor een entree die gezien mag worden?"
        title="Hoe wij uw entree vernieuwen"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw droogloopmat"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Help, mijn rode loper is aan vervanging toe!"
        btnText="Help, mijn rode loper is aan vervanging toe!"
        firstImg={'/stofferen/droogloopmat/droogloopmat-3.png'}
        secondImg="/stofferen/droogloopmat/droogloopmat-4.png"
        thirdImg="/stofferen/droogloopmat/droogloopmat-5.png"
        fourthImg="/stofferen/droogloopmat/droogloopmat-6.png"
        fifthImg="/stofferen/droogloopmat/droogloopmat-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
