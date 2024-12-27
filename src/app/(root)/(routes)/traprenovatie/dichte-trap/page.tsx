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
    title: 'Dichte trap - functionaliteit en stijl gecombineerd',
    imgSrc: '/traprenovatie/dichte-trap/dichte-trap-3.png',
    paragraphs: [
      <BodyText key="1">
        Een dichte trap biedt meer dan alleen praktische voordelen; het zorgt voor een strakke en complete uitstraling
        in uw woning. Wat mag u van ons verwachten? 
      </BodyText>,
      <ul>
        <li>
          Ombouwen van open naar dicht: Wij monteren stootborden met precisie, zodat uw trap een naadloze transformatie
          ondergaat.
        </li>
        <li>Stabiliteit en veiligheid: Elke trap wordt stevig en duurzaam afgewerkt voor een langdurig resultaat. </li>{' '}
        ,
        <li>
          Aanpasbaar aan uw stijl: Maak uw trap helemaal af met een bekleding naar keuze, zoals PVC, tapijt of
          laminaat. 
        </li>{' '}
        ,
        <li>
          Vakmanschap en zorg: Wij combineren expertise met aandacht voor elk detail om uw visie tot leven te brengen. 
        </li>
      </ul>,
      <BodyText>
        Een dichte trap zorgt niet alleen voor meer veiligheid en geluidsisolatie, maar geeft uw interieur ook een
        moderne en afgewerkte uitstraling.
      </BodyText>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw dichte trap er al 10 tot 20 jaar, dan is het tijd om deze een moderne en elegante upgrade te geven met
          een stijlvolle afwerking!
        </BodyText>
      </div>,
    ],
    pagesLinksContainerClassName: 'max-w-[589px]',
    pagesLinks: [
      { name: 'Bekleden met PVC', path: '/traprenovatie/bekleden-met-pvc' },
      { name: 'Bekleden met laminaat', path: '/traprenovatie/bekleden-met-laminaat' },
      { name: 'Bekleden met hout', path: '/traprenovatie/bekleden-met-hout' },
      { name: 'Bekleden met tapijt', path: '/traprenovatie/bekleden-met-tapijt' },
      { name: 'Bekleden met linoleum', path: '/traprenovatie/bekleden-met-linoleum' },
      { name: 'Schuren en behandelen', path: '/traprenovatie/schuren-en-behandelen' },
      { name: 'Schuren en schilderen', path: '/traprenovatie/schuren-en-schilderen' },
      { name: 'Beton Ciré Metal stuc', path: '/traprenovatie/beton-cire/betonCiré-metal-stuc' },
      { name: 'Beton Ciré Glamour stuc', path: '/traprenovatie/beton-cire/betonCiré-glamour-stuc' },
      { name: 'Beton Ciré Brut', path: '/traprenovatie/beton-cire/betonCiré-brut' },
      { name: 'Beton Ciré Parel', path: '/traprenovatie/beton-cire/betonCiré-parel' },
      { name: 'Beton Ciré Croco', path: '/traprenovatie/beton-cire/betonCiré-croco' },
      { name: 'Beton Ciré Venetiaans', path: '/traprenovatie/beton-cire/betonCiré-venetiaans' },
      { name: 'Beton Ciré Acoustic', path: '/traprenovatie/beton-cire/betonCiré-acoustic' },
      { name: 'Open trap', path: '/traprenovatie/dichte-trap' },
      { name: 'Dichte trap', path: '/traprenovatie/dichte-trap' },
      { name: 'Verlichting', path: '/traprenovatie/verlichting' },
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van een dichte trap?',
    answer: 'Dichte trappen bieden extra veiligheid en stabiliteit, vooral voor kleine kinderen en huisdieren.',
  },
  {
    question: 'Hoe onderhoud ik een dichte trap?',
    answer:
      'Regelmatig schoonmaken met een stofzuiger of doek is belangrijk. Voor houten trappen is het nodig om deze periodiek te schuren en te behandelen om slijtage te voorkomen.',
  },
  {
    question: 'Welke bekleding is het beste voor een dichte trap?',
    answer:
      'Populaire opties zijn tapijt, laminaat of hout. De keuze hangt af van de gewenste uitstraling, comfort en gebruiksgemak.',
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
      Droomt u al langere tijd van een perfect afgewerkte open trap in uw woning? Bereken via de knop hieronder wat het
      kost en neem contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat
      voor soort trap u heeft, wat de mogelijkheden zijn, ons advies en we komen met stalen zodat je zeker weten de
      juiste beslissing maakt. Deze afspraak kost eenmalig €50,- euro en deze wordt in mindering gebracht wanneer u de
      klus aan ons uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/dichte-trap/dichte-trap-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Dichte trap"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/dichte-trap/dichte-trap-1.png"
        orangeText="Geen zorgen, wij zorgen voor een complete upgrade!"
      />
      <CardsSection
        bottomText="Help, mijn oude trap is aan vervanging toe!"
        title="Hoe wij uw dichte trap transformeren"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/dichte-trap/dichte-trap-4.png'}
        secondImg="/traprenovatie/dichte-trap/dichte-trap-5.png"
        thirdImg="/traprenovatie/dichte-trap/dichte-trap-6.png"
        fourthImg="/traprenovatie/dichte-trap/dichte-trap-7.png"
        fifthImg="/traprenovatie/dichte-trap/dichte-trap-8.png"
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
