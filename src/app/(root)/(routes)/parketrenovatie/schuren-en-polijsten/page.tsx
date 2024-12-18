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
  imgSrc: '/Parketrenovatie/beautiful-shot-modern-house-staircase.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte',
};

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
        <BodyText className="text-secondaryDefault font-bold">
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
        <BodyText className="text-secondaryDefault font-bold">Dit gebeurt standaard na het opschuren.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'De parketteurs van GreenTeam maken gebruik van professionele machines en hoogwaardig schuurpapier. Hierdoor zijn de krasjes die door het schuren ontstaan, met het blote oog vrijwel niet zichtbaar.',
    question: 'Veoorzaakt het schuren ook kleine krasjes?',
  },
  {
    question: 'Hoeveel stof komt er vrij tijdens de werkzaamheden?',
    answer:
      'Bij GreenTeam maken wij gebruik van de meest hoogwaardige machines en producten. Onze machines zijn aangesloten op professionele stofzuigers, waardoor wij het schuren zo stofarm mogelijk uitvoeren',
  },
  {
    question: 'Wat zijn de voordelen van schuren en polijsten bij parketrenovatie?',
    answer:
      'Schuren verwijdert oneffenheden en beschadigde lagen, terwijl polijsten een glad en glanzend oppervlak oplevert, wat de duurzaamheid en uitstraling van het gerenoveerde parket verbetert',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen',
  },

  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/image11.png"
        pageName="Schuren en polijsten "
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat schuren en polijsten in zijn werk?"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/store1.png'}
        secondImg="/Parketrenovatie/store2.png"
        thirdImgTopText="Schuren"
        thirdImgText="Peeloerdijk, Assen"
        thirdImg="/Parketrenovatie/store3.png"
        fourthImg="/Parketrenovatie/store4.png"
        fifthImg="/Parketrenovatie/store5.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
