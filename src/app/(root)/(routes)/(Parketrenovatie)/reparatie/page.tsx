import { BodyText } from '@/components/theme/typography';
import { FAQSection, FAQType } from '../_components/FAQSection';
import { SecondSection } from '../_components/secondSection';
import { StoreSection } from '../_components/store';
import { ThirdSection } from '../_components/thirdSection';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { RatingSection } from '../../_components/ratingSection';
import { InfoCardProps } from '../../diensten/_components/cards';
import { QuestionSection } from '../../over-ons/_components/question';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Repareren',
    imgSrc: '/Parketrenovatie/reparatie-2.png',
    paragraphs: [
      <>
        Niet de hele vloer vervangen! Wij kunnen het parket leveren dat al in uw huis ligt om zo de reparatie uit te
        voeren met hetzelfde hout en er weer een geheel van te maken. zelf parket, laminaat, pvc leveren. We kunnen
        hetzelfde leveren als wat er ligt.
      </>,
      <>
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de meest voorkomende problemen die gerepareerd moeten worden?',

    answer:
      'Veelvoorkomende problemen zijn krassen, deuken, verkleuring en losse planken die kunnen optreden door slijtage of waterschade.',
  },
  {
    question: 'Kan ik zelf mijn houten vloer repareren?',
    answer:
      'Kleine beschadigingen kunnen vaak zelf worden hersteld met de juiste materialen en technieken, maar voor grotere of complexere reparaties is het aan te raden een professional in te schakelen.',
  },
  {
    question: 'Hoe lang duurt het om een houten vloer te repareren?',
    answer:
      'De tijdsduur hangt af van de aard en omvang van de schade; eenvoudige reparaties kunnen enkele uren duren, terwijl ingrijpende herstelwerkzaamheden enkele dagen in beslag kunnen nemen.',
  },
  {
    question: 'Wat zijn de voordelen van schuren en polijsten bij parketrenovatie?',
    answer:
      'Schuren verwijdert oneffenheden en beschadigde lagen, terwijl polijsten een glad en glanzend oppervlak oplevert, wat de duurzaamheid en uitstraling van het gerenoveerde parket verbetert',
  },
  {
    question: 'Wat zijn de voordelen van schuren en polijsten bij parketrenovatie?',
    answer:
      'Schuren verwijdert oneffenheden en beschadigde lagen, terwijl polijsten een glad en glanzend oppervlak oplevert, wat de duurzaamheid en uitstraling van het gerenoveerde parket verbetert',
  },
  {
    question: 'Wat zijn de voordelen van schuren en polijsten bij parketrenovatie?',
    answer:
      'Schuren verwijdert oneffenheden en beschadigde lagen, terwijl polijsten een glad en glanzend oppervlak oplevert, wat de duurzaamheid en uitstraling van het gerenoveerde parket verbetert',
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
  imgSrc: '/Parketrenovatie/reparatie-9.png',
  buttonText: 'Direct offerte berekenen',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection image="/Parketrenovatie/reparatie-1.png" pageName="Reparatie" />
      <ThirdSection title="Hoe gaat schuren en hardwaxen in zijn werk?" cards={thirdSectionCards} />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/reparatie-4.png'}
        secondImg="/Parketrenovatie/reparatie-5.png"
        thirdImg="/Parketrenovatie/reparatie-6.png"
        fourthImg="/Parketrenovatie/reparatie-7.png"
        fifthImg="/Parketrenovatie/reparatie-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
