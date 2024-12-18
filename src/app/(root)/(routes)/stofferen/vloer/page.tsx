import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: ' Vloerstoffering - stijlvol, comfortabel en duurzaam ',
    imgSrc: '/stofferen/vloer/vloer-2.png',
    paragraphs: [
      <div key="1">
        Met onze vloerstoffering service transformeren wij uw woning met precisie en oog voor detail. Dit is hoe wij te
        werk gaan:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Nauwkeurige meting: We meten de ruimte zorgvuldig op om een perfect resultaat te garanderen. </li>
        <li>
          Hoogwaardige materialen: Samen met u kiezen we tapijt of vloerbedekking die past bij uw stijl en behoeften. {' '}
        </li>
        <li>
          Grondige voorbereiding: We reinigen en egaliseren de vloer, zodat deze klaar is voor een naadloze afwerking. 
        </li>
        <li>
          Professionele stoffering: Onze experts leggen het tapijt met precisie en vakmanschap, voor een strak en luxe
          eindresultaat. 
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met onze vloerstoffering service voegt u niet alleen comfort toe aan uw ruimte, maar ook geeft u uw interieur
        een stijlvolle en frisse uitstraling!{' '}
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
    question: 'Welke soorten vloeren zijn er beschikbaar?',
    answer: (
      <BodyText>
        Er zijn meerdere soorten tapijt beschikbaar, in alle kleuren en soorten, zowel hoogpolig als laagpolig. <br />
        Wij adviseren u graag over wat het beste bij u past.{' '}
      </BodyText>
    ),
  },
  {
    question: 'Hoe onderhoud ik mijn vloer het beste?',
    answer:
      'Het onderhoud hangt af van het type vloer. Regelmatig stofzuigen, vegen en af en toe diep reinigen met geschikte producten zijn belangrijk.',
  },
  {
    question: 'Kunnen jullie ook tapijt leggen in mijn bedrijfspand?',
    answer: (
      <BodyText>
        Graag helpen wij u met het leggen van elk soort tapijt in elke mogelijke ruimte.
        <br />
        Dit kan een school, bedrijfspand of gewoon in uw huis zijn.
      </BodyText>
    ),
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
      Droomt u al langere tijd van een stijlvolle nieuwe vloer?. Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak.{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/vloer/vloer-8.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Stofferen"
        pageName="Vloer"
        listTitle="Herkenbaar?"
        listItems={[
          'Overal slijtageplekken',
          'Extreem veel schade',
          'Hardnekkige vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte berekenen"
        imgSrc="/stofferen/vloer/vloer-1.png"
        orangeText=" Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Klaar om uw oude vloer te vervangen?"
        title="Hoe wij uw vloer vernieuwen"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze vloerstoffeerservice en ontdek hoe we verouderde en versleten vloeren omtoveren tot sfeervolle en comfortabele ruimtes. Onze tevreden klanten zijn enthousiast over onze kwaliteit, en uw vloer kan de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/stofferen/vloer/vloer-3.png'}
        secondImg="/stofferen/vloer/vloer-4.png"
        thirdImg="/stofferen/vloer/vloer-5.png"
        fourthImg="/stofferen/vloer/vloer-6.png"
        fifthImg="/stofferen/vloer/vloer-7.png"
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
