import { CardsSection } from '@/components/cardsSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { BodyText } from '@/components/theme/typography';
import { FAQSection, FAQType } from '../_components/FAQSection';
import { SecondSection } from '../_components/secondSection';
import { StoreSection } from '../_components/store';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { ParketrenovatieWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Wat is frezen?',
    imgSrc: '/Parketrenovatie/v-groef-frezen-2.png',
    paragraphs: [
      <>
        Frezen is een techniek waarbij een roterend gereedschap - de frees - wordt gebruikt om materiaal tussen de
        vloerplanken te verwijderen. Zo kunnen we de ‘vellingkant’ - de groeven tussen de planken - opfrissen voor een
        strakke afwerking.
      </>,
      <>
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Wat zijn V-groeven?',
    imgSrc: '/Parketrenovatie/v-groef-frezen-3.png',
    paragraphs: [
      <>
        <BodyText>
          V-groeven zijn schuine uitsnijdingen aan de randen van de vloerdelen die samen een luxe, V-vormige groef
          creëren. Deze groeven geven uw vloer een unieke uitstraling en voegen een stijlvol accent toe aan elke ruimte.{' '}
        </BodyText>{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault font-bold">Dit gebeurt standaard na het frezen.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is het doel van V-groef vrezen?',
    answer:
      'V-groef vrezen creëert een V-vormige uitsparing in houten vloeren, wat niet alleen esthetisch aantrekkelijk is, maar ook helpt om de planken beter te laten aansluiten en te voorkomen dat ze gaan werken.',
  },

  {
    question: 'Kan ik zelf V-groef vrezen, of is het beter om een professional in te schakelen?',
    answer:
      'Zelf V-groef vrezen is mogelijk met de juiste gereedschappen, maar het kan complexe precisie vereisen. Voor een perfect resultaat is het vaak raadzaam om een professional in te schakelen.',
  },
  {
    question: 'Wat zijn de voordelen van het inschakelen van een professional voor V-groef vrezen?',
    answer:
      'Professionals hebben de juiste gereedschappen en expertise om V-groeven nauwkeurig te frezen, wat zorgt voor een hoogwaardige afwerking en voorkomt schade aan uw vloer.',
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
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.{' '}
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.{' '}
    </BodyText>,
  ],
  imgSrc: '/Parketrenovatie/v-groef-frezen-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/Parketrenovatie/hero.png" />{' '}
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/v-groef-frezen-1.png"
        pageName="V-groef-frezen"
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        bottomText="Kunnen jullie dit bij mij realiseren?"
        title="Hoe gaat V-groef frezen in zijn werk?"
        cards={thirdSectionCards}
      />
      <ParketrenovatieWhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/v-groef-frezen-4.png'}
        secondImg="/Parketrenovatie/v-groef-frezen-5.png"
        thirdImg="/Parketrenovatie/v-groef-frezen-6.png"
        fourthImg="/Parketrenovatie/v-groef-frezen-7.png"
        fifthImg="/Parketrenovatie/v-groef-frezen-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
