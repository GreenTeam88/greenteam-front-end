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
    title: 'Dichte trap - Trapstoffering - de perfecte mix van functionaliteit en stijl  ',
    imgSrc: '/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-2.png',
    paragraphs: [
      <div key="1">
        Met onze professionele trapstoffering geeft u uw oude trap niet alleen een frisse uitstraling, maar verbetert u
        ook het comfort en veiligheid. Wat mag u verwachten?
      </div>,
      <div key="2">
        * Zorgvuldige voorbereiding: We meten de trap nauwkeurig in en verwijderen eventuele oude bekleding. 
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Hoogwaardige materialen: Kies uit een breed scala aan stoffen die passen bij uw interieur.  </li>
        <li>Strakke afwerking: Onze vakmensen zorgen voor een naadloos en duurzaam eindresultaat. </li>
        <li>
          Vrijheid en comfort: Een beklede trap is niet alleen mooier, maar ook veiliger en zachter om op te lopen. 
        </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw dichte trap er al 10 tot 20 jaar, dan is het tijd om deze een frisse nieuwe look te geven met een
          mooie tapijtbekleding!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Open trap - ruimtelijk, licht en stijlvol',
    imgSrc: '/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-3.png',
    paragraphs: [
      <div key="1">
        Een open trap brengt charme en licht in uw woning, maar soms is het tijd voor een update. Wat kunt u van ons
        verwachten? 
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Nieuwe bekleding: Kies uit tapijt, PVC of andere materialen die passen bij uw stijl en behoeften. </li>
        <li>Schuren en lakken: Voor een frisse, vernieuwde uitstraling zonder grote aanpassingen.  </li>
        <li>Ruimte en licht: Behoud de openheid en het lichte karakter van uw trap met onze naadloze afwerking. </li>
        <li>Vakmanschap: Ons team zorgt voor een professionele en duurzame oplossing. </li>
      </ul>,
      <div>
        Met onze aanpak blijft uw open trap een echte eyecatcher, maar dan wel met een moderne en strakke uitstraling!
      </div>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Met onze trapstoffering transformeren we uw open trap tot een echte blikvanger in uw woning!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe onderhoud ik tapijt het beste?',
    answer:
      'Er zijn speciale middelen om uw tapijt schoon en correct te onderhouden. Zo mag een tapijt niet nat schoongemaakt worden want dan kunnen er eventueel vlekken ontstaan.',
  },
  {
    question: 'Is tapijt geschikt voor huisdieren?',
    answer:
      'Tapijt is zeer geschikt voor huisdieren. Het biedt huisdieren een veilige en slipvrije ondergrond om veilig naar boven of beneden te kunnen lopen zonder te vallen of uit te glijden.',
  },
  {
    question: 'Wat zijn de voordelen van tapijt ten opzichte van andere vloerbedekkingen?',
    answer:
      'Welke voordelen biedt tapijt, zoals comfort, geluidsisolatie en warmte, vergeleken met harde vloeren zoals laminaat of PVC.',
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
      contact met ons op voor een afspraak. 
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Bekleden met tapijt"
        listTitle="Geef uw trap een tweede leven - weg met die oude look!"
        listItems={[
          'Slijtage van intensief gebruik',
          'Opvallende kleurverschillen',
          'Hardnekkige vlekken in uw trap',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-1.png"
        orangeText="Geen zorgen, wij zorgen voor een traptransformatie!"
      />
      <CardsSection
        bottomText="Tijd om uw trap te vernieuwen?"
        title="Hoe zorgen wij voor een perfecte trap?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-4.png'}
        secondImg="/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-5.png"
        thirdImg="/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-6.png"
        fourthImg="/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-7.png"
        fifthImg="/traprenovatie/bekleden-met-tapijt/bekleden-met-tapijt-8.png"
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
