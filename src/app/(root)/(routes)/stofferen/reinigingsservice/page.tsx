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
    title: 'Reinigingsservice - voor een brandschoon resultaat',
    imgSrc: '/stofferen/meubels/meubels-2.png',
    paragraphs: [
      <div key="1">
        Met onze professionele reinigings service krijgt uw tapijt de zorg en aandacht die het verdient. Waarom kiezen
        voor onze service?{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Dieptereiniging: We verwijderen vuil, vlekken en allergenen diep uit de vezels. </li>
        <li>Stoomreiniging: Voor een grondige en hygiënische schoonmaak van tapijt, vloerkleden en bekleding.  </li>
        <li>Hoogwaardige producten: We gebruiken professionele reinigingsmiddelen die effectief en veilig zijn.  </li>
        <li>Ervaren specialisten: Ons team zorgt ervoor dat zelfs de kleinste details worden aangepakt. </li>
      </ul>,
      <p key="4" className="mb-9">
        éMet onze deskundige aanpak krijgen uw meubels niet alleen een nieuwe look, maar ook een nieuw leven!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Geniet ook weer van een stralend en hygiënisch tapijt, zodat uw interieur weer als nieuw aanvoelt.{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Welke soorten stoffen kunnen worden gereinigd?',
    answer:
      'Onze reinigingsservice kan een breed scala aan stoffen behandelen, waaronder katoen, polyester, en microvezel. Neem contact met ons op voor specifieke informatie over uw type stof.',
  },
  {
    question: 'Hoelang duurt het om meubels te reinigen?',
    answer:
      'De tijdsduur voor het reinigen van meubels varieert, afhankelijk van de grootte en de stof. Meestal kunt u rekenen op een tijdsduur van enkele uren tot een dag.',
  },
  {
    question: 'Is de reinigingsdienst veilig voor huisdieren en kinderen?',
    answer:
      'Ja, wij gebruiken milieuvriendelijke en niet-giftige reinigingsproducten die veilig zijn voor zowel huisdieren als kinderen.',
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
      Droomt u al langere tijd van een perfect gereinigd tapijt met een nieuwe uitstraling? Bereken via de knop
      hieronder wat het kost en neem contact met ons op voor een afspraak.
    </BodyText>,
  ],
  imgSrc: '/stofferen/reinigingsservice/reinigingsservice-8.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Stofferen"
        pageName="Reinigingsservice"
        listTitle="Herkenbaar?"
        listItems={[
          'Zwarte vegen en slijtageplekken',
          'Koffievlekken',
          'Hardnekkige vetvlekken ',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte-aanvragen"
        btnText="Offerte berekenen"
        imgSrc="/stofferen/reinigingsservice/reinigingsservice-1.png"
        orangeText="Geen zorgen, wij maken uw tapijt weer als nieuw!"
      />
      <CardsSection
        bottomText="Help, mijn oude tapijt en/of bank is aan vernieuwing toe!"
        title=" Hoe wij uw tapijt weer laten stralen"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
        btnLink="/offerte-aanvragen"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze reinigingsservice voor tapijten en banken en ontdek hoe we verouderde en vervuilde meubels weer tot leven brengen. Veel tevreden klanten zijn enthousiast over de kwaliteit en effectiviteit van onze diensten, en uw tapijten en/of banken kunnen de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte-aanvragen"
        firstImg={'/stofferen/reinigingsservice/reinigingsservice-3.png'}
        secondImg="/stofferen/reinigingsservice/reinigingsservice-4.png"
        thirdImg="/stofferen/reinigingsservice/reinigingsservice-5.png"
        fourthImg="/stofferen/reinigingsservice/reinigingsservice-6.png"
        fifthImg="/stofferen/reinigingsservice/reinigingsservice-7.png"
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
