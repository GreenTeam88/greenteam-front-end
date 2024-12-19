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
    title: 'Tapijt verwijderen',
    imgSrc: '/stofferen/tapijt-verwijderen/tapijt-verwijderen-2.png',
    paragraphs: [
      <div key="1">
        Met onze tapijtverwijderingsservice bieden we een grondige aanpak voor een frisse start in uw interieur:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Efficiënt en stofvrij: We verwijderen uw oude tapijt snel en zonder rommel, zodat uw woning direct klaar is
          voor de volgende stap. 
        </li>
        <li>
          Zorg voor de ondervloer: We reinigen en egaliseren de ondergrond, zodat deze perfect is voor uw nieuwe vloer. 
        </li>
        <li>
          Flexibele mogelijkheden: Of u nu kiest voor parket, laminaat, PVC of tegels, wij zorgen voor een perfecte
          basis. {' '}
        </li>
        <li>Tijdsbesparend: Bespaar uzelf het zware werk en laat alles aan onze professionals over.</li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is de beste manier om tapijt te verwijderen?',
    answer:
      'Tapijt verwijderen is vaak een zware klus. Niet alleen moet er gesneden worden, vaak zit tapijt ook vastgelijmd aan de ondervloer. Om niet meer te beschadigen dan nodig raden wij aan dit niet zelf te doen.',
  },
  {
    question: 'Hoe kan ik de lijmresten van de ondervloer verwijderen?',
    answer: 'Wij kunnen dit voor u wegschuren met speciaal daarvoor geschikte zware machines.',
  },
  {
    question: 'Is het nodig om de ondervloer te repareren na het verwijderen van tapijt?',
    answer:
      'Ja, het is vaak nodig om de ondervloer te controleren en eventueel te repareren voordat u nieuwe vloerbedekking legt. Voor elke nieuwe vloer moet de ondervloer volledig recht zijn en dus zonder lijmresten.',
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
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Als u al langere tijd op zoek bent naar iemand die uw oude tapijt vakkundig verwijdert, bereken dan via de knop
      hieronder wat het kost en neem contact met ons op voor een afspraak.{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/tapijt-verwijderen/tapijt-verwijderen-8.png',
  buttonText: 'offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Stofferen"
        pageName="Tapijt verwijderen"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage door intensief gebruik',
          'Opvallende kleurverschillen',
          'Vieze vlekken ',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/tapijt-verwijderen/tapijt-verwijderen-1.png"
        orangeText="Geen zorgen, wij maken uw vloer weer als nieuw!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe werken wij aan uw vloer?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze service voor het verwijderen van vloeren en trappen en ontdek hoe we verouderde en versleten materialen snel en efficiënt verwijderen. Veel tevreden klanten zijn enthousiast over de kwaliteit en professionaliteit van onze diensten, uw vloeren en trappen kunnen de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/stofferen/tapijt-verwijderen/tapijt-verwijderen-3.png'}
        secondImg="/stofferen/tapijt-verwijderen/tapijt-verwijderen-4.png"
        thirdImg="/stofferen/tapijt-verwijderen/tapijt-verwijderen-5.png"
        fourthImg="/stofferen/tapijt-verwijderen/tapijt-verwijderen-6.png"
        fifthImg="/stofferen/tapijt-verwijderen/tapijt-verwijderen-7.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
