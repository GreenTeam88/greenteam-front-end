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
import { WhyGreenTeamBasicPages } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Deurmat - functionaliteit en stijl in één',
    imgSrc: '/stofferen/deurmat/deurmat-2.png',
    paragraphs: [
      <div key="1">
         Een deurmat is meer dan alleen een praktisch item; het is de eerste indruk van uw woning. Met een kwalitatieve
        deurmat geniet u van:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Een stijlvolle entree: Kies uit diverse kleuren en designs die passen bij uw interieur. </li>
        <li>Effectieve bescherming: Houdt vuil en vocht buiten, zodat uw vloer schoon blijft en langer meegaat. </li>
        <li>Duurzaamheid: Hoogwaardige materialen zorgen ervoor dat de mat bestand is tegen dagelijks gebruik.  </li>
      </ul>,
      <p key="4" className="mb-9">
        Onze deurmatten zijn ontworpen om niet alleen functioneel, maar ook esthetisch aantrekkelijk te zijn. Of u nu
        kiest voor klassiek of modern, wij zorgen voor een entree die gezien mag worden!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van een deurmat?',
    answer:
      'Een deurmat helpt vuil en vocht buiten te houden, verbetert de hygiëne in huis en kan ook dienen als een stijlvol decoratief element.',
  },
  {
    question: 'Hoe kies ik de juiste deurmat voor mijn huis?',
    answer:
      'Let op de maat, het materiaal en de stijl van de deurmat, en kies er een die past bij de inrichting en de hoeveelheid verkeer bij de deur.',
  },
  {
    question: 'Hoe onderhoud ik mijn deurmat?',
    answer:
      'Regelmatig stofzuigen en af en toe reinigen met water en milde zeep helpt om de deurmat in goede conditie te houden. Sommige deurmatten zijn ook machinewasbaar.',
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
  imgSrc: '/stofferen/deurmat/deurmat-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function StofferenDeurmatPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/stofferen/hero.png" />
      <ListCard
        sectionName="Stofferen"
        pageName="Deurmat"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van overmatig gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken die niet weggaan',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/deurmat/deurmat-1.png"
        orangeText="Geen zorgen, wij hebben de perfecte oplossing voor u! "
      />
      <CardsSection
        bottomText="Tijd om die oude deurmat te vervangen?"
        title="Hoe wij zorgen voor de perfecte deurmat"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw deurmat"
      />
      <WhyGreenTeamBasicPages />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze deurmatten en ontdek hoe we verouderde en versleten matten transformeren tot stijlvolle en functionele toegangspunten. Veel tevreden klanten zijn enthousiast over de kwaliteit en uitstraling van onze deurmatten, en uw entree kan de volgende zijn!"
        btnText="Bereken uw deurmat"
        firstImg={'/stofferen/deurmat/deurmat-3.png'}
        secondImg="/stofferen/deurmat/deurmat-4.png"
        thirdImg="/stofferen/deurmat/deurmat-5.png"
        fourthImg="/stofferen/deurmat/deurmat-6.png"
        fifthImg="/stofferen/deurmat/deurmat-7.png"
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
