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
import { OverigWhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Gietvloeren',
    imgSrc: '/overig/gietvloeren/gietvloeren-2.png',
    paragraphs: [
      <div key="1">
        Een gietvloer biedt een naadloze en stijlvolle oplossing voor elke ruimte. Dit is wat u kunt verwachten: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Strakke uitstraling: Een naadloze vloer die een moderne en minimalistische sfeer creëert.  </li>
        <li>Duurzaam en onderhoudsvriendelijk: Bestand tegen slijtage, waterdicht en eenvoudig schoon te maken. </li>
        <li>Veelzijdige toepassingen: Perfect voor keukens, badkamers, woonkamers en kantoren.  </li>
        <li>
          Aanpasbaar aan uw stijl: Kies uit eindeloze kleuren en afwerkingen om de vloer helemaal op uw interieur af te
          stemmen. {' '}
        </li>
        <li>Comfort en hygiëne: Een comfortabele vloer die hygiënisch en geschikt is voor dagelijks gebruik. </li>
      </ul>,

      <p key="4" className="mb-9">
        Met een gietvloer geniet u van een elegante, moderne basis die uw interieur naar een hoger niveau tilt.
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
    question: 'Wat zijn gietvloeren en welke materialen worden gebruikt?',
    answer:
      'Gietvloeren zijn naadloze vloeren die vaak zijn gemaakt van polyurethaan of epoxy. Ze bieden een moderne uitstraling en zijn duurzaam.',
  },
  {
    question: 'Zijn gietvloeren geschikt voor elke ruimte in huis?',
    answer:
      'Ja, gietvloeren kunnen in verschillende ruimtes worden aangebracht, waaronder woonkamers, keukens en badkamers. Ze zijn waterdicht en gemakkelijk schoon te maken.',
  },
  {
    question: 'Hoelang gaat een gietvloer mee en wat is het onderhoud?',
    answer:
      'Een goed aangebrachte gietvloer kan 10-30 jaar meegaan, afhankelijk van het gebruik. Onderhoud omvat regelmatig reinigen en het vermijden van scherpe voorwerpen om krassen te voorkomen.',
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
  title: 'Waar wacht je op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al jaren van een nieuwe unieke vloer? Bereken direct de kosten via de knop hieronder en plan een afspraak
      met onze specialist. Tijdens het bezoek bespreken we de vloersoort, uw opties en ons advies. We nemen kleurstalen
      mee zodat u zeker bent van de juiste keuze.
    </BodyText>,
  ],
  imgSrc: '/overig/gietvloeren/gietvloeren-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function OverigGietvloerenPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <ListCard
        sectionName="Overig"
        pageName="Gietvloeren"
        listTitle="Herkenbaar?"
        listItems={[
          'Tijd voor iets nieuws',
          'Slijtage door intensief gebruik',
          'Extreem veel krasjes',
          'Vieze vlekken in de vloer ',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/overig/gietvloeren/gietvloeren-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <OverigWhyGreenTeam />

      <StoreSection
        title="Wat hebben wij in petto? Jouw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze gietvloeren en ontdek de ongeëvenaarde kwaliteit en afwerking voor jouw huis. Wij zorgen voor een duurzame en stijlvolle vloer die bijdraagt aan een unieke uitstraling in elke ruimte. Veel tevreden klanten hebben al gekozen voor onze gietvloeren, en u kunt de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/overig/gietvloeren/gietvloeren-3.png'}
        secondImg="/overig/gietvloeren/gietvloeren-4.png"
        thirdImg="/overig/gietvloeren/gietvloeren-5.png"
        fourthImg="/overig/gietvloeren/gietvloeren-6.png"
        fifthImg="/overig/gietvloeren/gietvloeren-7.png"
      />
      <WhatWaitingForCard
        orangeText="Geen verrassing, afspraak is afspraak!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />

      <RatingSection />
    </div>
  );
}
