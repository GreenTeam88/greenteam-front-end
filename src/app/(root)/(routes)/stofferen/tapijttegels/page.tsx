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
    title: 'Tapijttegels - stijlvol, comfortabel en duurzaam',
    imgSrc: '/stofferen/tapijttegels/tapijttegels-2.png',
    paragraphs: [
      <div key="1">
        Met onze tapijttegel service geven we uw woning een nieuwe, frisse uitstraling. Dit is hoe wij te werk gaan:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Nauwkeurige metingen: We zorgen ervoor dat elke tegel perfect past in uw woning. </li>
        <li>
          Advies op maat: Kies uit een breed scala aan stijlen en kleuren die passen bij uw wensen en interieur. {' '}
        </li>
        <li>Voorbereiding van de vloer: We reinigen en egaliseren de ondergrond voor een strak resultaat. </li>
        <li>
          Installatie met precisie: Onze experts leggen de tapijttegels naadloos en stevig, zodat uw vloer er perfect
          uitziet en lang meegaat. {' '}
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met tapijttegels geeft u uw interieur een warme, comfortabele uitstraling, terwijl u geniet van het gemak en de
        duurzaamheid die deze oplossing biedt.{' '}
      </p>,
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
    question: 'Wat zijn de voordelen van tapijttegels?',
    answer:
      'Tapijttegels bieden flexibiliteit in ontwerp, zijn gemakkelijk te vervangen bij schade en zorgen voor geluidsisolatie en comfort.',
  },
  {
    question: 'Hoe worden tapijttegels gelegd?',
    answer:
      'Tapijttegels kunnen eenvoudig worden gelegd op een vlakke ondergrond met lijm of een zelfklevende onderzijde, wat het proces versnelt.',
  },
  {
    question: 'Zijn tapijttegels gemakkelijk te onderhouden?',
    answer:
      'Ja, tapijttegels zijn eenvoudig te onderhouden; regelmatig stofzuigen en af en toe reinigen met een geschikte tapijtreiniger is meestal voldoende.',
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
      Droomt u al langere tijd van de perfecte vloer? Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak.{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/tapijttegels/tapijttegels-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/stofferen/hero.png" />
      <ListCard
        sectionName="Stofferen"
        pageName="Tapijttegels"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Overal losse draadjes',
          'Hardnekkige vlekken',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/Tapijttegels/Tapijttegels-1.png"
        orangeText="Geen zorgen, wij hebben dé oplossing!"
      />
      <CardsSection
        bottomText="Klaar voor een stijlvolle nieuwe vloer?"
        title="Hoe wij uw vloer vernieuwen?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <WhyGreenTeamBasicPages />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze tapijttegels en ontdek hoe we verouderde en versleten vloeren transformeren tot stijlvolle en comfortabele ruimtes. Veel tevreden klanten zijn enthousiast over de kwaliteit en uitstraling van onze tapijttegels, uw vloer kan de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/stofferen/tapijttegels/tapijttegels-3.png'}
        secondImg="/stofferen/tapijttegels/tapijttegels-4.png"
        thirdImg="/stofferen/tapijttegels/tapijttegels-5.png"
        fourthImg="/stofferen/tapijttegels/tapijttegels-6.png"
        fifthImg="/stofferen/tapijttegels/tapijttegels-7.png"
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
