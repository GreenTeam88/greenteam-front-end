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
    title: 'Bekleden met laminaat - stijlvol en duurzaam',
    imgSrc: '/traprenovatie/bekleden-laminaat/bekleden-laminaat-2.png',
    paragraphs: [
      <div key="1">
        Geef uw trap een nieuwe look met laminaat, de ideale keuze voor wie op zoek is naar een combinatie van stijl,
        functionaliteit en betaalbaarheid. Waarom kiezen voor laminaat bekleding? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Veelzijdige designs: Van een klassieke houtlook tot moderne patronen, laminaat past bij elk interieur. {' '}
        </li>
        <li>Duurzaam: Bestand tegen slijtage en dagelijks gebruik, waardoor het jarenlang mooi blijft. </li>
        <li>Eenvoudig onderhoud: Gemakkelijk schoon te maken en te onderhouden, ideaal voor drukke huishoudens. </li>
        <li>Professioneel gelegd: Onze experts zorgen voor een strakke, naadloze afwerking die indruk maakt. </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Verlichting',
    imgSrc: '/traprenovatie/bekleden-laminaat/bekleden-laminaat-3.png',
    paragraphs: [
      <div key="1">
        Onze trapverlichting combineert functionaliteit en stijl, waardoor uw trap niet alleen veiliger wordt, maar ook
        een echte blikvanger in uw woning. Wat kunt u van ons verwachten?{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Perfect geplaatste verlichting: We bepalen nauwkeurig de beste locaties voor LED-verlichting om elke trede
          optimaal te verlichting. 
        </li>
        <li>
          Naadloze installatie: De LED-strips worden zorgvuldig gemonteerd, zodat ze perfect passen bij uw trapdesign. {' '}
        </li>
        <li>Sfeervolle uitstraling: Onze verlichting voegt een warme, moderne uitstraling toe aan uw interieur. </li>
        <li>Energiezuinig en duurzaam: LED-verlichting is milieuvriendelijk en gaat lang mee.</li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Heeft u nog geen trapverlichting? Dan is het tijd om de sfeer en veiligheid te verbeteren met nieuwe
          verlichting!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Hout look',
    imgSrc: '/traprenovatie/bekleden-laminaat/bekleden-laminaat-4.png',
    paragraphs: [
      <div key="1">
        Onze houten look trapbekleding combineert de natuurlijke schoonheid van hout met het gemak van moderne
        materialen. Wat maakt deze optie uniek? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Tijdloze uitstraling: Creëer een trap die warmte en elegantie uitstraalt met realistische houtnerfstructuren. {' '}
        </li>
        <li>
          Duurzaam en onderhoudsvriendelijk: Geniet van de look van hout zonder het gedoe van intensief onderhoud. {' '}
        </li>
        <li>
          Maatwerk design: Kies uit diverse houtsoorten en afwerkingen om uw trap perfect te laten aansluiten bij uw
          interieur. {' '}
        </li>
        <li>Professionele afwerking: Ons team zorgt voor een naadloze plaatsing en een hoogwaardige afwerking. </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Heeft u nog geen houten look voor je trap? Dan is het tijd om de uitstraling en sfeer te verbeteren met een
          warme, natuurlijke houtafwerking!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoelang gaat laminaat mee?',
    answer:
      'Met goed onderhoud kan laminaat tot 15-25 jaar meegaan. Het is echter afhankelijk van de kwaliteit en de intensiteit van het gebruik.',
  },
  {
    question: 'Kan ik laminaat zelf leggen?',
    answer: (
      <BodyText>
        Ja dat kan, echter vereist het veel precisie en geduld om het goed te leggen.
        <br />
        Wij raden aan om dit door een specialist te laten doen. Dan bent u gegarandeerd van goed resultaat met garantie.
      </BodyText>
    ),
  },
  {
    question: 'Is laminaat geschikt voor alle ruimtes in huis?',
    answer:
      'Laminaat is veelzijdig en kan in de meeste ruimtes worden gebruikt, maar het is minder geschikt voor vochtige ruimtes zoals badkamers.',
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
      Droomt u al langere tijd van een perfect afgewerkte trap?. Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort trap
      u heeft, wat de mogelijkheden zijn, ons advies en we komen met stalen zodat u zeker weten de juiste beslissing
      maakt. Deze afspraak kost eenmalig €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons
      uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/bekleden-laminaat/bekleden-laminaat-10.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Bekleden met laminaat"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage door intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/bekleden-laminaat/bekleden-laminaat-1.png"
        orangeText="Geen zorgen, wij transformeren uw trap!"
      />
      <CardsSection
        bottomText="Help, mijn oude trap is aan vervanging toe!"
        title=" Upgrade uw trap met een stijlvolle laminaat bekleding!"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <TraprenovatieWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto"
        description="Zoals al eerder vermeld hebben wij al 20 jaar aan ervaring en hebben wij parketteurs die super veel kennis en ervaring met zich meebrengen om zo uw trap weer de gewenste uitstraling te geven!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/bekleden-laminaat/bekleden-laminaat-5.png'}
        secondImg="/traprenovatie/bekleden-laminaat/bekleden-laminaat-6.png"
        thirdImg="/traprenovatie/bekleden-laminaat/bekleden-laminaat-7.png"
        fourthImg="/traprenovatie/bekleden-laminaat/bekleden-laminaat-8.png"
        fifthImg="/traprenovatie/bekleden-laminaat/bekleden-laminaat-9.png"
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
