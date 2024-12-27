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
    title: 'Open trap - ruimtelijk, licht en stijlvol',
    imgSrc: '/traprenovatie/open-trap/open-trap-2.png',
    paragraphs: [
      <div key="1">
        Een open trap brengt charme en licht in uw woning, maar soms is het tijd voor een update. Wat kunt u van ons
        verwachten? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Nieuwe bekleding: Kies uit tapijt, PVC of andere materialen die passen bij uw stijl en behoeften.  </li>
        <li>Schuren en lakken: Voor een frisse, vernieuwde uitstraling zonder grote aanpassingen. </li>
        <li>Ruimte en licht: Behoud de openheid en het lichte karakter van uw trap met onze naadloze afwerking. </li>
        <li>Vakmanschap: Ons team zorgt voor een professionele en duurzame oplossing. </li>
      </ul>,
      <div key="4">
        Met onze aanpak blijft uw open trap een echte eyecatcher, maar dan wel met een moderne en strakke uitstraling!
      </div>,

      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een moderne en elegante upgrade te geven met een
          stijlvolle afwerking!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Wat zijn de mogelijkheden?',
    imgSrc: '/traprenovatie/open-trap/open-trap-3.png',
    paragraphs: [
      <BodyText key="1">
        Een open trap biedt talloze mogelijkheden om deze volledig naar jouw smaak en stijl te personaliseren. Of je nu
        op zoek bent naar een moderne, strakke uitstraling of juist een warme, klassieke sfeer, er zijn opties voor
        iedere wens.
      </BodyText>,
      <BodyText key="2">
        Je kunt jouw open trap laten bekleden met verschillende materialen, zoals PVC, laminaat, hout, tapijt of
        linoleum. Elk materiaal heeft zijn eigen unieke voordelen; PVC en laminaat zijn duurzaam en
        onderhoudsvriendelijk, terwijl hout en tapijt zorgen voor een warme, natuurlijke uitstraling. Voor een
        eigentijdse en luxe look kun je kiezen voor een afwerking met Beton Ciré, verkrijgbaar in diverse stijlen zoals
        Metal Stuc, Glamour Stuc, Brut, Parel, Croco, Venetiaans, en Acoustic. Elke Beton Ciré-afwerking heeft een eigen
        karakter, van stoer en robuust tot verfijnd en elegant.
      </BodyText>,
      <BodyText key="3">
        Daarnaast kun je jouw open trap laten schuren en behandelen voor een vernieuwd uiterlijk, of laten schilderen
        voor een frisse, moderne uitstraling. Als je meer functionaliteit wilt toevoegen, kun je overwegen om je open
        trap te transformeren in een dichte trap of verlichting te integreren. Deze aanpassingen kunnen niet alleen de
        esthetiek verbeteren, maar ook de veiligheid en sfeer van jouw trap verhogen.
        <br />
        Met al deze mogelijkheden maak je van je open trap een echte blikvanger die perfect aansluit bij jouw interieur
        en stijl!
      </BodyText>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Geef uw open trap een nieuwe look! De mogelijkheden zijn eindeloos met PVC, hout, tapijt of Beton Ciré in
          diverse stijlen.
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
      { name: 'Open trap', path: '/traprenovatie/open-trap' },
      { name: 'Dichte trap', path: '/traprenovatie/dichte-trap' },
      { name: 'Verlichting', path: '/traprenovatie/verlichting' },
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van een open trap?',
    answer:
      'Een open trap zorgt voor een luchtige en moderne uitstraling, vergroot de lichtinval en maakt de ruimte visueel ruimer.',
  },
  {
    question: 'Is een open trap veilig voor kinderen en huisdieren?',
    answer:
      'Hoewel open trappen aantrekkelijk zijn, kunnen ze gevaarlijk zijn voor kleine kinderen en huisdieren. Het is belangrijk om extra voorzorgsmaatregelen te nemen, zoals het installeren van hekjes.',
  },
  {
    question: 'Hoe onderhoud ik een open trap?',
    answer:
      'Onderhoud bestaat uit regelmatig stofzuigen en afstoffen om vuil en stof te verwijderen. Bij houten trappen is het ook belangrijk om deze periodiek te schuren en te behandelen.',
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
  imgSrc: '/traprenovatie/open-trap/open-trap-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Open trap"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/open-trap/open-trap-1.png"
        orangeText="Geen zorgen, wij hebben de perfecte oplossing voor jou!"
      />
      <CardsSection
        bottomText="Help, mijn oude trap is aan vervanging toe!"
        title="Hoe wij uw open trap transformeren"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title=" Wat hebben wij voor u in petto?"
        description="Zoals al eerder vermeld hebben wij al 20 jaar aan ervaring en hebben wij parketteurs die super veel kennis en ervaring met zich meebrengen om zo uw vloer weer zo goed als nieuw te maken!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/open-trap/open-trap-4.png'}
        secondImg="/traprenovatie/open-trap/open-trap-5.png"
        thirdImg="/traprenovatie/open-trap/open-trap-6.png"
        fourthImg="/traprenovatie/open-trap/open-trap-7.png"
        fifthImg="/traprenovatie/open-trap/open-trap-8.png"
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
