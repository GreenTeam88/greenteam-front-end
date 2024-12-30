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
    title: 'Trapverlichting - stijlvol, veilig en sfeervol',
    imgSrc: '/traprenovatie/verlichting/verlichting-2.png',
    paragraphs: [
      <BodyText key="1">
        Onze trapverlichting combineert functionaliteit en stijl, waardoor uw trap niet alleen veiliger wordt, maar ook
        een echte blikvanger in uw woning. Wat kunt u van ons verwachten?
      </BodyText>,
      <ul className="list list-disc list-inside flex flex-col gap-2" key="2">
        <li>
          Perfect geplaatste verlichting: We bepalen nauwkeurig de beste locaties voor LED-verlichting om elke trede
          optimaal te verlichting. 
        </li>
        <li>
          Naadloze installatie: De LED-strips worden zorgvuldig gemonteerd, zodat ze perfect passen bij uw trapdesign. 
        </li>
        <li>Sfeervolle uitstraling: Onze verlichting voegt een warme, moderne uitstraling toe aan uw interieur. </li>
        <li>Energiezuinig en duurzaam: LED-verlichting is milieuvriendelijk en gaat lang mee.  </li>
      </ul>,
      <BodyText key="3">
        Met onze trapverlichting krijgt uw trap niet alleen een praktische upgrade, maar wordt het ook een stijlvolle
        toevoeging aan uw woning
      </BodyText>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw dichte trap er al 10 tot 20 jaar, dan is het tijd om deze een moderne en elegante upgrade te geven met
          een stijlvolle afwerking!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Welke soorten verlichting zijn het beste voor een trap?',
    answer:
      'De beste opties zijn LED-strips, wandlampen of inbouwverlichting, omdat ze een heldere en gelijkmatige verlichting bieden zonder te veel ruimte in te nemen.',
  },
  {
    question: 'Moet ik de trapverlichting dimbaar maken?',
    answer:
      'Dimbare verlichting kan handig zijn voor het creëren van sfeer en het aanpassen van de lichtsterkte aan verschillende situaties, zoals tijdens een filmavond of een romantisch diner.',
  },
  {
    question: 'Hoe installeer ik verlichting in mijn traprenovatie?',
    answer:
      'Het installeren van trapverlichting wordt gedaan door onze specialisten die ook uw traprenovatie verzorgen.',
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
      Droomt u al langere tijd van een perfecte afgewerkte trap met verlichting? Bereken via de knop hieronder wat het
      kost en neem contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat
      voor soort trap u heeft, wat de mogelijkheden zijn, ons advies en we komen met stalen zodat uzeker weten de juiste
      beslissing maakt. Deze afspraak kost eenmalig €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan
      ons uitbesteed.{' '}
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/verlichting/verlichting-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Verlichting"
        listTitle="Herkenbaar?"
        listItems={[
          'Verouderde uitstraling',
          'Onvoldoende helderheid',
          'Verkeerde kleurtemperatuur',
          'Ongelijke lichtverdeling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/verlichting/verlichting-1.png"
        orangeText="Geen zorgen, wij hebben de perfecte oplossing!"
      />
      <CardsSection
        bottomText="Tijd om uw trap te verlichten?"
        title="Met professionele trapverlichting brengen we sfeer en veiligheid in uw woning"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <TraprenovatieWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/verlichting/verlichting-3.png'}
        secondImg="/traprenovatie/verlichting/verlichting-4.png"
        thirdImg="/traprenovatie/verlichting/verlichting-5.png"
        fourthImg="/traprenovatie/verlichting/verlichting-6.png"
        fifthImg="/traprenovatie/verlichting/verlichting-7.png"
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
