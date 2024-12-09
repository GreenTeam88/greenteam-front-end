import { CardsSection } from '@/components/cardsSection';
import { RatingSection } from '@/components/ratingSection';
import { BodyText } from '@/components/theme/typography';
import { FAQSection, FAQType } from '../_components/FAQSection';
import { SecondSection } from '../_components/secondSection';
import { StoreSection } from '../_components/store';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Drevelen',
    imgSrc: '/Parketrenovatie/drevelen-2.png',
    paragraphs: [
      <>
        Met drevelen slaan we spijkers met precisie dieper de vloer in, zodat ze stevig in de ondervloer blijven en een
        glad oppervlak creëren. Dankzij onze gespecialiseerde techniek liggen de nagels gelijkmatig en verstoren ze geen
        vervolgbehandelingen.{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Naadloos voegen',
    imgSrc: '/Parketrenovatie/drevelen-3.png',
    paragraphs: [
      <>
        <BodyText>
          Na het drevelen vullen we de overgebleven gaatjes op met een mix van hars en houtstof, speciaal afgestemd op
          uw vloer. Zo verdwijnen de spijkergaten volledig uit het zicht. Kleine scheuren en krassen nemen we ook emteen
          mee voor een prachtig glad eindresultaat.{' '}
        </BodyText>{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">Dit gebeurt standaard na het voegen.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is drevelen en wanneer wordt het toegepast?',

    answer:
      'Drevelen is een techniek waarbij houten delen worden verbonden door middel van houten of metalen pennen (drevels). Het wordt vaak gebruikt bij de installatie van houten vloeren en meubels.',
  },

  {
    question: 'Wat zijn de voordelen van drevelen?',
    answer:
      'Drevelen biedt sterke verbindingen, voorkomt kromtrekken van het hout en kan esthetisch aantrekkelijk zijn, aangezien de verbinding vaak onzichtbaar.',
  },
  {
    question: 'Is het mogelijk om zelf te drevelen?',
    answer:
      'Ja, zelf drevelen is mogelijk met de juiste gereedschappen en technieken, maar voor grotere projecten of specialistische toepassingen kan het handig zijn om een professional in te schakelen.',
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
      'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers. In alle andere gevallen is een aanbetaling niet nodig. We informeren u altijd van tevoren of een aanbetaling van toepassing is, waarbij we ook rekening houden met de verhouding tot het totale projectbedrag.',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht je op!',
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
  imgSrc: '/Parketrenovatie/drevelen-9.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection sectionName="Parket Renovatie" image="/Parketrenovatie/drevelen-1.png" pageName="Drevelen" />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        bottomText="Spijkers en schroeven zat? Wij helpen u graag!"
        title="Hoe gaat drevelen in zijn werk?"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/drevelen-4.png'}
        secondImg="/Parketrenovatie/drevelen-5.png"
        thirdImg="/Parketrenovatie/drevelen-6.png"
        fourthImg="/Parketrenovatie/drevelen-7.png"
        fifthImg="/Parketrenovatie/drevelen-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
