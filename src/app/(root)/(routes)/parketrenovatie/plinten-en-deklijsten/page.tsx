import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { BodyText } from '@/components/theme/typography';
import { SecondSection } from '../_components/secondSection';
import { ParketrenovatieStoreSection } from '../_components/store';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { ParketrenovatieWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/question';
import { InfoCardProps } from '../../diensten/_components/cards';

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
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar, dan zijn nieuwe deklijsten de ideale manier om uw ruimte weer compleet en
          stijlvol af te werken!
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
        <BodyText className="text-secondaryDefault font-bold">Dit gebeurt standaard na het hardwaxen.</BodyText>{' '}
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
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat u wilt, waar wacht u dan op. Bereken via de knop hieronder wat het kost en neem contact met ons op
      voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weten de juiste beslissing maakt.{' '}
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.{' '}
    </BodyText>,
  ],
  imgSrc: '/Parketrenovatie/plinten-en-deklijsten-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function ParketrenovatiePlintenEnDeklijstenPage() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/Parketrenovatie/plinten-en-deklijsten-hero.png" />{' '}
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/plinten-en-deklijsten-1.png"
        pageName="Plinten en deklijsten"
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        title="Hoe gaat plinten en deklijsten in zijn werk?"
        cards={thirdSectionCards}
        bottomText="Onafgewerkte vloer? Wij helpen u graag!"
      />
      <ParketrenovatieWhyGreenTeam />
      <ParketrenovatieStoreSection
        firstImg={'/Parketrenovatie/plinten-en-deklijsten-4.png'}
        secondImg="/Parketrenovatie/plinten-en-deklijsten-5.png"
        thirdImg="/Parketrenovatie/plinten-en-deklijsten-6.png"
        fourthImg="/Parketrenovatie/plinten-en-deklijsten-7.png"
        fifthImg="/Parketrenovatie/plinten-en-deklijsten-8.png"
        firstImgTopText="Plinten"
        secondImgTopText="Deklijsten"
        thirdImgTopText="Plinten"
        fourthImgTopText="Deklijsten"
        fifthImgTopText="Plinten"
        firstImgBottomText="Hooigracht, Leiden"
        secondImgBottomText="Molenstraat, Roosendaal"
        thirdImgBottomText="Ameidewal, Helmond"
        fourthImgBottomText="Appelhaven, Hoorn"
        fifthImgBottomText="Voorstraat, Dordrecht"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
