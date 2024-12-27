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
    title: 'Bekleden met PVC - stijlvol, duurzaam en praktisch',
    imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-2.png',
    paragraphs: [
      <div key="1">
        PVC trapbekleding is de ideale oplossing voor een trap die zowel mooi als functioneel moet zijn. Wat kunt u
        verwachten: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Ruime keuze aan designs: Kies uit diverse kleuren en texturen voor een moderne, persoonlijke uitstraling. 
        </li>
        <li>Slijtvast en duurzaam: PVC is bestand tegen intensief gebruik en blijft jarenlang mooi.</li>
        <li>Eenvoudig onderhoud: eenvoudig schoon te maken, ideaal voor drukke huishoudens. </li>
        <li>Geluidsdempend: Minder trapgeluiden, meer rust in huis. </li>
        <li>
          Professionele installatie: Ons team zorgt voor een perfecte afwerking, zodat uw trap er als nieuw uitziet. 
        </li>
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
    imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-3.png',
    paragraphs: [
      <div key="1">
        Onze trapverlichting combineert functionaliteit en stijl, waardoor uw trap niet alleen veiliger wordt, maar ook
        een echte blikvanger in uw woning. Wat kunt u van ons verwachten?{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Perfect geplaatste verlichting: We bepalen nauwkeurig de beste locaties voor LED-verlichting om elke trede
          optimaal te verlichting. {' '}
        </li>
        <li>
          Naadloze installatie: De LED-strips worden zorgvuldig gemonteerd, zodat ze perfect passen bij uw trapdesign. 
        </li>
        <li>Sfeervolle uitstraling: Onze verlichting voegt een warme, moderne uitstraling toe aan uw interieur. </li>
        <li>Energiezuinig en duurzaam: LED-verlichting is milieuvriendelijk en gaat lang mee. </li>
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
    title: 'Hout look ',
    imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-4.png',
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
          interieur. 
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
  {
    title: 'Beton look',
    imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-5.png',
    paragraphs: [
      <div key="1">
        Breng de moderne charme van een industriële betonlook in uw woning met onze trapbekleding. Wat maakt deze optie
        uniek? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Ruwe elegantie: De betonlook creëert een industriële, eigentijdse sfeer die past bij moderne interieurs. {' '}
        </li>
        <li>Veelzijdige afwerking: Kies uit verschillende grijstinten en texturen die aansluiten bij uw smaak.  </li>
        <li>
          Duurzame materialen: De betonlook is slijtvast, gemakkelijk te onderhouden en bestand tegen dagelijks
          gebruik, {' '}
        </li>
        <li>Professioneel aangebracht: Ons team zorg voor een strakke, naadloze afwerking die indruk maakt. </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Heeft u nog geen betonlook voor je trap? Dan is het tijd om een stoere, industriële uitstraling te creëren met
          een stijlvolle betonafwerking!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Marmer look ',
    imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-6.png',
    paragraphs: [
      <div key="1">
        Onze trapbekleding met marmer look combineert de luxe uitstraling van echt marmer met de praktische voordelen
        van moderne materialen. Waarom kiezen voor deze optie? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Luxe uitstraling: Realistische marmer afwerkingen die een vleugje luxe toevoegen aan uw interieur.  </li>
        <li>Veelzijdige ontwerpen: Kies uit een breed scala aan kleuren en patronen die passen bij uw stijl. </li>
        <li>
          Duurzaam en onderhoudsvriendelijk: Geen zorgen over slijtage of ingewikkeld onderhoud, maar wel de uitstraling
          van marmer. {' '}
        </li>
        <li>Professioneel afgewerkt: Ons team zorgt voor een naadloze installatie en strakke afwerking. </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Heeft u nog geen marmerlook voor je trap? Dan is het tijd om een luxe en elegante uitstraling te geven met een
          verfijnde marmerafwerking!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van PVC vloerbedekking?',
    answer:
      'PVC is duurzaam, waterbestendig en gemakkelijk te onderhouden. Het is ook verkrijgbaar in verschillende stijlen en kleuren, waardoor het geschikt is voor diverse interieurontwerpen.',
  },
  {
    question: 'Kan ik PVC zelf leggen of heb ik professionele hulp nodig?',
    answer:
      'Hoewel het mogelijk is om PVC zelf te leggen, kan professionele installatie zorgen voor een betere afwerking en duurzaamheid. Dit is vooral belangrijk bij ingewikkelde patronen.',
  },
  {
    question: 'Hoe onderhoud ik een PVC vloer?',
    answer:
      'PVC vloeren vereisen minimaal onderhoud; regelmatig stofzuigen en af en toe dweilen met een mild schoonmaakmiddel is meestal voldoende om ze in topconditie te houden.',
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
      uitbesteed. {' '}
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/bekleden-pvc/bekleden-pvc-12.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Bekleden met PVC"
        listTitle="Geef uw trap een frisse en moderne look met PVC!"
        listItems={[
          'Verouderde uitstraling',
          'Slijtage door jarenlang gebruik',
          'Vieze vlekken die u niet meer schoon krijgt',
          'Oud-bollige uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/bekleden-pvc/bekleden-pvc-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude trap is aan vervanging toe!"
        title="Wat maakt PVC trapbekleding de beste keuze?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Zoals al eerder vermeld hebben wij al 20 jaar aan ervaring en hebben wij parketteurs die super veel kennis en ervaring met zich meebrengen om zo uw trap weer de gewenste uitstraling te geven!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/bekleden-pvc/bekleden-pvc-7.png'}
        secondImg="/traprenovatie/bekleden-pvc/bekleden-pvc-8.png"
        thirdImg="/traprenovatie/bekleden-pvc/bekleden-pvc-9.png"
        fourthImg="/traprenovatie/bekleden-pvc/bekleden-pvc-10.png"
        fifthImg="/traprenovatie/bekleden-pvc/bekleden-pvc-11.png"
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
