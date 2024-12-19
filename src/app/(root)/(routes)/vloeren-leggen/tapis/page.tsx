import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { ListCard } from '../_components/listCard';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Tapis',
    imgSrc: '/vloeren-leggen/tapis/tapis-2.png',
    paragraphs: [
      <div key="1">
        Een tapisvloer is niet zomaar een vloer, het is een investering in kwaliteit, comfort en tijdloze schoonheid.{' '}
      </div>,
      <div key="2">Wat maakt een tapisvloer uniek? </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Tijdloze elegantied: Deze massief houten vloer voegt direct klasse en stijl toe aan elke ruimte. </li>
        <li>Vakmanschap: Elke plank wordt met zorg gelegd, geschuurd en afgewerkt voor een naadloze uitstraling. </li>
        <li>Duurzaamheid: Een tapisvloer gaat generaties mee en behoudt zijn charme, zelfs bij intensief gebruik. </li>
        <li>
          Warmte en sfeer: De natuurlijke uitstraling van hout brengt een warme en uitnodigende sfeer in uw woning. {' '}
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met een tapisvloer investeert u in een duurzame, stijlvolle oplossing die uw interieur naar een hoger niveau
        tilt. {' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan i s het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Tapis is een traditionele vloerbedekking die is gemaakt van massief hout en vaak wordt gebruikt in complexe patronen. In tegenstelling tot andere parketvloeren biedt tapis een luxueuze uitstraling en is het vaak handgemaakt.',
    question: '  Wat is tapis en hoe verschilt het van andere parketvloeren?',
  },
  {
    question: 'Kan tapis worden geïnstalleerd in vochtige ruimtes?',
    answer:
      'Tapis is minder geschikt voor vochtige ruimtes zoals badkamers of kelders, omdat hout kan uitzetten of kromtrekken. Het is beter om tapis te installeren in droge en goed geventileerde gebieden.',
  },
  {
    question: 'Hoe onderhoud ik een tapis vloer?',
    answer:
      'Regelmatig stofzuigen en het gebruik van een vochtige doek zijn essentieel. Daarnaast is het aan te raden om periodiek een houten vloerolie of -lak aan te brengen voor extra bescherming en glans. ',
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
  title: 'Waar wacht u op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat je wilt, waar wacht je dan op. Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.{' '}
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.{' '}
    </BodyText>,
  ],
  imgSrc: '/vloeren-leggen/tapis/tapis-8.png',
  buttonText: 'Direct Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Tapis"
        listTitle="Moet uw vloer aan deze eisen voldoen?"
        listItems={['Elegantie die direct opvalt', 'Tijdloos design', 'Vakmanschap voor een perfect eindresultaat']}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/tapis/tapis-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        btnLink="/offerte"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <WhyGreenTeam />
      <StoreSection
        btnLink="/offerte"
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/vloeren-leggen/tapis/tapis-3.png'}
        secondImg="/vloeren-leggen/tapis/tapis-4.png"
        thirdImg="/vloeren-leggen/tapis/tapis-5.png"
        fourthImg="/vloeren-leggen/tapis/tapis-6.png"
        fifthImg="/vloeren-leggen/tapis/tapis-7.png"
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
