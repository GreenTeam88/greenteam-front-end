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
    title: 'Wat zijn plinten?',
    imgSrc: '/Parketrenovatie/schuren-en-lakken-2.png',
    paragraphs: [
      <>
        Plinten zorgen voor een nette overgang tussen vloer en muur en verbergen eventuele onregelmatigheden. Ze zijn
        niet alleen decoratief maar ook praktisch, omdat ze de onderkant van de muur beschermen tegen stoten en
        beschadigingen door schoonmaakwerkzaamheden. Met onze all-in service levert Green Team plinten en deklijsten,
        zodat u nergens omkijken naar heeft.{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Wat zijn deklijsten?',
    imgSrc: '/Parketrenovatie/plinten-en-deklijsten-3.png',
    paragraphs: [
      <>
        <BodyText>
          Deklijsten werken net als plinten, maar worden plat op de vloer geplaatst tussen de vloer en de muur. Ze
          bieden bescherming tegen stof en vocht en zijn een subtiel, stijlvol detail. Ook deze leveren wij in
          verschillende stijlen en maten. {' '}
        </BodyText>{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">Dit gebeurt standaard na het hardwaxen.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Plinten zijn verticale afwerkingen die de overgang tussen de vloer en de muur bedekken, terwijl deklijsten worden gebruikt om de bovenkant van een wandafwerking of het aansluitpunt van verschillende materialen te verbergen.',
    question: 'Wat is het verschil tussen plinten en deklijsten?',
  },
  {
    question: 'Waarom zijn plinten belangrijk voor mijn interieur?',
    answer:
      'Plinten zorgen niet alleen voor een nette afwerking, maar beschermen ook de muur tegen stoten en slijtage, en kunnen bijdragen aan de esthetiek van uw ruimte.',
  },
  {
    question: 'Kan ik plinten en deklijsten zelf installeren, of moet ik een professional inschakelen?',
    answer:
      'Hoewel het mogelijk is om plinten en deklijsten zelf te installeren, kan het inschakelen van een professional zorgen voor een nauwkeurige afwerking en voorkomt het mogelijke fouten tijdens de installatie.',
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
  imgSrc: '/Parketrenovatie/plinten-en-deklijsten-9.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection image="/Parketrenovatie/plinten-en-deklijsten-1.png" pageName="Plinten en deklijsten" />
      <ThirdSection
        title="Hoe gaat plinten en deklijsten in zijn werk?"
        cards={thirdSectionCards}
        bottomText="Onafgewerkte vloer? Wij helpen u graag!"
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/plinten-en-deklijsten-4.png'}
        secondImg="/Parketrenovatie/plinten-en-deklijsten-5.png"
        thirdImg="/Parketrenovatie/plinten-en-deklijsten-6.png"
        fourthImg="/Parketrenovatie/plinten-en-deklijsten-7.png"
        fifthImg="/Parketrenovatie/plinten-en-deklijsten-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
