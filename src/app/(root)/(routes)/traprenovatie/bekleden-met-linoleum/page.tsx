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
import { TraprenovatieWhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Bekleden met linoleum - duurzaam en stijlvol',
    imgSrc: '/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-2.png',
    paragraphs: [
      <div key="1">
        Linoleum is de perfecte keuze voor een trap die duurzaamheid, veiligheid en stijl combineert. Wat maakt linoleum
        bijzonder? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Ecologisch verantwoord: gemaakt van natuurlijke materialen zoals lijnolie, harsen en houtmeel.  </li>
        <li>Duurzaam: Bestand tegen slijtage en eenvoudig te onderhouden, ideaal voor drukke huishoudens. </li>
        <li>Veiligheid: Uitstekende grip, waardoor het een veilige optie is voor dagelijks gebruik. </li>
        <li>
          Aanpasbaar: Kies uit een breed scala aan kleuren en patronen om uw trap perfect aan te laten sluiten bij uw
          interieur.
        </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Met linoleum creëert u een tijdloze uitstraling die zowel praktisch als stijlvol aantrekkelijk is.
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Is linoleum geschikt voor vochtige ruimtes?',
    answer:
      'Ja, linoleum is geschikt voor vochtige ruimtes, maar zorg ervoor dat het goed wordt gelegd en behandeld. Vermijd langdurige blootstelling aan water.',
  },
  {
    question: 'Hoe onderhoud ik linoleum vloerbedekking?',
    answer: 'Linoleum kunt u zowel vochtig als nat schoonmaken. ',
  },
  {
    question: 'Is linoleum een milieuvriendelijke keuze?',
    answer: 'Tegenwoordig wordt linoleum vrijwel groen geproduceerd.',
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
      Droomt u al langere tijd van een perfect afgewerkte trap? Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort trap
      u heeft, wat de mogelijkheden zijn, ons advies en we komen met stalen zodat u zeker weten de juiste beslissing
      maakt. Deze afspraak kost eenmalig €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons
      uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Bekleden met linoleum"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-1.png"
        orangeText="Geen zorgen, wij transformeren uw trap!"
      />
      <CardsSection
        bottomText="Tijd om uw trap te vernieuwen?"
        title="Waarom kiezen voor linoleum trapbekleding?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <TraprenovatieWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw trap weer laten stralen!"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-3.png'}
        secondImg="/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-4.png"
        thirdImg="/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-5.png"
        fourthImg="/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-6.png"
        fifthImg="/traprenovatie/bekleden-met-linoleum/bekleden-met-linoleum-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de trappenspecialist langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
