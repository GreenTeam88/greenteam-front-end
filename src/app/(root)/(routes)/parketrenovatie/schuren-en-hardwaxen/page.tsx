import { CardsSection } from '@/components/cardsSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { BodyText } from '@/components/theme/typography';
import { FAQSection, FAQType } from '../_components/FAQSection';
import { SecondSection } from '../_components/secondSection';
import { StoreSection } from '../_components/store';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Schuren',
    imgSrc: '/Parketrenovatie/schuren-en-lakken-2.png',
    paragraphs: [
      <>
        Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen
        zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment
        onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is
        je houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar
        wat aan te doen!
      </>,
      <>
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Hardwaxen',
    imgSrc: '/Parketrenovatie/schuren-en-hardwaxen-3.png',
    paragraphs: [
      <>
        <BodyText>
          Een behandeling met hardwax biedt een dubbele bescherming, vergelijkbaar met olie, maar met een extra waxlaag
          voor betere weerstand tegen vuil en vocht. Hardwax benadrukt de natuurlijke houtstructuur en geeft de vloer
          een warme, rijke uitstraling - perfect om het hout weer tot leven te brengen.{' '}
        </BodyText>{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault font-bold">Dit gebeurt standaard na het hardwaxen.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Een vloer die is behandeld met lak vereist over het algemeen weinig onderhoud. Het is echter belangrijk om regelmatig te stofzuigen om krassen te voorkomen',
    question: 'Hoe kan ik mijn met lak behandelde vloer het beste onderhouden?',
  },
  {
    question: 'Wanneer is de met lak behandelde vloer droog en uitgehard?',
    answer:
      'Wanneer een houten vloer is behandeld met lak, is deze 24 uur na het aanbrengen weer droog en beloopbaar. Na 72 uur (3 dagen) is de vloer weer belastbaar, en na 10 dagen is de laklaag volledig uitgehard.',
  },
  {
    question: 'Heeft de lak een sterke geur?',
    answer:
      'De lak die wij gebruiken voor de behandeling van houten vloeren heeft geen sterke geur. Daarnaast is de lak milieuvriendelijk en duurzaam.',
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
  title: 'Waar wacht je op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat je wilt, waar wacht je dan op. Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/Parketrenovatie/schuren-en-hardwaxen-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/schuren-en-hardwaxen-1.png"
        pageName="Schuren en hardwaxen"
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        bottomText="Mijn vloer verdient die extra bescherming!"
        title="Hoe gaat schuren en hardwaxen in zijn werk?"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/schuren-en-hardwaxen-4.png'}
        secondImg="/Parketrenovatie/schuren-en-hardwaxen-5.png"
        thirdImg="/Parketrenovatie/schuren-en-hardwaxen-6.png"
        fourthImg="/Parketrenovatie/schuren-en-hardwaxen-7.png"
        fifthImg="/Parketrenovatie/schuren-en-hardwaxen-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
