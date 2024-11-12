import { BodyText } from '@/components/theme/typography';
import { ContactSection } from '../../_components/contactSection';
import { Hero } from '../../_components/hero';
import { PhoneNumberSection } from '../../_components/phoneNumberSection';
import { RatingSection } from '../../_components/ratingSection';
import { InfoCardProps } from '../../diensten/_components/cards';
import { QuestionSection } from '../../over-ons/_components/question';
import { FAQSection, FAQType } from './_components/FAQSection';
import { SecondSection } from './_components/secondSection';
import { StoreSection } from './_components/store';
import { ThirdSection } from './_components/thirdSection';
import { WhatWaitingForSection } from './_components/whatWaitingFor';
import { WhyGreenTeam } from './_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Schuren',
    imgSrc: '/Parketrenovatie/image12.png',
    paragraphs: [
      <>
        Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen
        zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment
        onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is
        je houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar
        wat aan te doen!
      </>,
      <>
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Polijsten',
    imgSrc: '/Parketrenovatie/image13.png',
    paragraphs: [
      <>
        <BodyText>
          Polijsten is het proces waardoor een oppervlak van een materiaal glad en glanzend gemaakt wordt, waardoor de
          oppervlakteruwheid verkleind wordt en het materiaal een sterk spiegelend effect verkrijgt. Dit gebeurt
          standaard na het opschuren.
        </BodyText>{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">Dit gebeurt standaard na het opschuren.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Wij werken met meerdere teams en specialisten, waardoor we niet beperkt zijn tot één locatie of provincie. We zijn actief in heel Nederland en voeren, in uitzonderlijke gevallen, ook opdrachten uit in België en op de Waddeneilanden.',
    question: 'Werken jullie door heel Nederland?',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen of, indien gewenst, contant betalen.',
  },
  {
    question: 'Hoelang duurt een renovatie?',
    answer:
      'De duur van een renovatie hangt sterk af van de omvang van het project. Zo kan de renovatie van één trap doorgaans binnen één dag worden afgerond, terwijl drie trappen waarschijnlijk twee dagen in beslag zullen nemen.',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn.',
  },
  {
    question: 'Is er een aanbetaling nodig voor jullie aan de slag gaan?',
    answer:
      'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers.',
  },
  {
    question: 'Wat zijn de garantievoorwaarden?',
    answer:
      'Per categorie gelden andere garantievoorwaarden. Onze garantie voorwaarden zijn te vinden in onze algemene voorwaarden.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection image="/Parketrenovatie/image11.png" />
      <ThirdSection cards={thirdSectionCards} />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/store1.png'}
        secondImg="/Parketrenovatie/store2.png"
        thirdImg="/Parketrenovatie/store3.png"
        fourthImg="/Parketrenovatie/store4.png"
        fifthImg="/Parketrenovatie/store5.png"
      />
      <WhatWaitingForSection />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
