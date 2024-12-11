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
    title: 'Tegelen',
    imgSrc: '/overig/tegelen/tegelen-2.png',
    paragraphs: [
      <div key="1">
        Onze tegelservice biedt een perfecte combinatie van stijl en functionaliteit, voor elke ruimte in uw woning. Dit
        is hoe wij te werk gaan: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Voorbereiding van de ondergrond: We reinigen en egaliseren de vloer om een stabiele basis te creëren.  </li>
        <li>
          Selectie van tegels: Kies uit een breed assortiment tegels, van robuuste vloertegels tot elegante wandtegels,
          passend bij uw stijl.  
        </li>
        <li>
          Professioneel leggen: Onze ervaren tegelzetters zorgen voor een strak en naadloos resultaat, met oog voor
          detail en duurzaamheid. 
        </li>
        <li>
          Afwerking en oplevering: met een zorgvuldige afwerking zorgen we dat uw vloer niet alleen functioneel is, maar
          ook een echte blikvanger. {' '}
        </li>
      </ul>,

      <p key="4" className="mb-9">
        Met tegels haalt u een vloer in huis die niet alleen mooi is, maar ook praktisch, slijtvast en eenvoudig te
        onderhouden.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe kies ik de juiste tegels voor mijn project?',
    answer:
      'Het is belangrijk om rekening te houden met de functie van de ruimte, de stijl, het materiaal en de duurzaamheid van de tegels.',
  },
  {
    question: 'Kunnen jullie helpen bij meerdere ruimtes in mijn woning?',
    answer:
      'Wij helpen graag bij het betegelen van uw woning, badkamers, woonkamers, toiletten, garages en werkruimtes behoren allemaal tot de mogelijkheden.',
  },
  {
    question: 'Zijn alle patronen tegels mogelijk?',
    answer:
      'Elke soort, type en maat is mogelijk afhankelijk van uw wensen en de beoogde ruimte waarin het geplaatst moet worden.',
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
      Droomt u al jaren van een nieuwe unieke tegelvloer? Bereken direct de kosten via de knop hieronder en plan een
      afspraak met onze specialist. Tijdens het bezoek bespreken we de houtsoort, uw opties en ons advies. We nemen
      stalen mee zodat u zeker bent van de juiste keuze.
    </BodyText>,
  ],
  imgSrc: '/overig/tegelen/tegelen-8.png',
  buttonText: 'Offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Overig"
        pageName="Tegelen"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage door intensief gebruik',
          'Extreem veel krasjes',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling ',
        ]}
        btnLink="/offerte-aanvragen"
        btnText="Offerte berekenen"
        imgSrc="/overig/tegelen/tegelen-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <WhyGreenTeam />

      <StoreSection
        title="Wat hebben wij in petto? Jouw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze tegeldiensten en ontdek de ongeëvenaarde kwaliteit en afwerking voor jouw ruimtes. Wij zorgen voor een duurzame en stijlvolle tegelvloer die bijdraagt aan een unieke uitstraling in elke kamer. Veel tevreden klanten hebben al gekozen voor onze tegeldiensten, en u kunt de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/overig/tegelen/tegelen-3.png'}
        secondImg="/overig/tegelen/tegelen-4.png"
        thirdImg="/overig/tegelen/tegelen-5.png"
        fourthImg="/overig/tegelen/tegelen-6.png"
        fifthImg="/overig/tegelen/tegelen-7.png"
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
