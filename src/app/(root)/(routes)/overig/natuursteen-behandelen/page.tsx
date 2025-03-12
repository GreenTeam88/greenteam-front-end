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
    title: 'Natuursteen behandelen',
    imgSrc: '/overig/natuursteen-behandelen/natuursteen-behandelen-2.png',
    paragraphs: [
      <div key="1">
        Met onze natuursteenbehandeling geven we uw vloer een luxe en frisse uitstraling. Wat wij doen: 
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Grondige reiniging: We verwijderen hardnekkige vlekken en opgehoopt vuil om de oorspronkelijke uitstraling te
          herstellen. 
        </li>
        <li>
          Herstellen van krassen: Onze experts polijsten en herstellen oppervlakkige beschadigingen voor een glad en
          stralend resultaat. 
        </li>
        <li>
          Bescherming aanbrengen: Met hoogwaardige producten brengen we een beschermlaag aan die het steen beschermt
          tegen slijtage en vlekken. 
        </li>
        <li>
          Natuurlijke glans accentueren: Of u nu kiest voor een matte, zijdeachtige of hoogglanzende afwerking, wij
          laten uw vloer weer stralen. 
        </li>
      </ul>,

      <p key="4" className="mb-9">
        Geschikt voor alle soorten natuursteen, zoals marmer, graniet of travertijn, zorgt onze behandeling voor een
        vloer die er weer als nieuw uitziet én lang meegaat.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe kan ik mijn natuurstenen vloer het beste schoonmaken?',
    answer:
      'Gebruik een pH-neutrale schoonmaakmiddel en vermijd agressieve chemicaliën die het oppervlak kunnen beschadigen.',
  },
  {
    question: 'Moet ik mijn natuursteen impregneren?',
    answer:
      'Ja, impregneren helpt om het steen te beschermen tegen vlekken en vocht, waardoor de levensduur wordt verlengd. Dit kunt u het beste door een specialist laten uitvoeren.',
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
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn. Het is ook belangrijk dat de ruimte goed toegankelijk is, omdat we vaak werken met zware professionele machines die naar de werkplek gebracht moeten worden.',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al jaren van een perfect nieuw uitziende vloer? Bereken direct de kosten via de knop hieronder en plan
      een afspraak met onze specialist. Tijdens het bezoek bespreken we de houtsoort, uw opties en ons advies. We nemen
      stalen mee zodat u zeker bent van de juiste keuze.
    </BodyText>,
  ],
  imgSrc: '/overig/natuursteen-behandelen/natuursteen-behandelen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function OverigNatuursteenbehandelenPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <ListCard
        sectionName="Overig"
        pageName="Natuursteen behandelen"
        listTitle="Herkenbaar?"
        listItems={['Doffe vloer', 'Extreem veel krasjes', 'Vieze vlekken in de vloer', 'Versleten uitstraling']}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/overig/natuursteen-behandelen/natuursteen-behandelen-1.png"
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
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze natuursteenbehandeling en ontdek de ongeëvenaarde kwaliteit en afwerking voor uw vloer. Wij zorgen voor een zorgvuldige behandeling die de schoonheid en duurzaamheid van uw natuursteen versterkt. Veel tevreden klanten hebben al gekozen voor onze natuursteenbehandeling, en u kunt de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/overig/natuursteen-behandelen/natuursteen-behandelen-3.png'}
        secondImg="/overig/natuursteen-behandelen/natuursteen-behandelen-4.png"
        thirdImg="/overig/natuursteen-behandelen/natuursteen-behandelen-5.png"
        fourthImg="/overig/natuursteen-behandelen/natuursteen-behandelen-6.png"
        fifthImg="/overig/natuursteen-behandelen/natuursteen-behandelen-7.png"
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
