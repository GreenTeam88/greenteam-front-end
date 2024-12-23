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
    imgSrc: '/Parketrenovatie/schuren-en-oliën-2.png',
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
    title: 'Oliën',
    imgSrc: '/Parketrenovatie/schuren-en-oliën-3.png',
    paragraphs: [
      <>
        <BodyText>
          Een professionele oliebehandeling brengt de natuurlijke schoonheid van uw houten vloer naar voren. De
          parketteurs van Green Team werken met hoogwaardige apparatuur om de olie grondig in de vloer te laten trekken
          voor een duurzame bescherming. Olie geeft uw vloer niet alleen een warme uitstraling, maar biedt ook de
          mogelijkheid om krassen, vlekken of slijtage eenvoudig bij te werken. Bovendien kan, afhankelijk van de
          houtsoort, ook een kleur worden toegevoegd. Niet zeker van uw keuze? Geen zorgen - wij nemen verschillende
          kleuren mee zodat u ter plekke kunt kiezen. We adviseren u graag over de beste opties!
        </BodyText>
      </>,
      <>
        <BodyText className="text-secondaryDefault font-bold">Dit is een van de mogelijkheden na het schuren.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Het is mogelijk om de houten vloer te polijsten en te schuren, waardoor de eerdere behandeling, evenals vlekken en krassen, worden verwijderd.',
    question: 'Kan onze parketvloer worden gelakt nadat deze is geolied?',
  },
  {
    question: 'Wanneer is de met olie behandelde vloer droog en uitgehard?',
    answer:
      'Wanneer een houten vloer is behandeld met olie, is deze na 24 uur weer droog en beloopbaar. Na 72 uur (3 dagen) is de vloer volledig uitgehard.',
  },
  {
    question: 'Hoe kan ik mijn met olie behandelde vloer het beste onderhouden?',
    answer: 'Wekelijks behandelen met een PH-neutrale, ontvettende reiniger.',
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
      Als dit is wat je wilt, waar wacht je dan op. Bereken via de knop hieronder wat het kost en neem contact met ons
      op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat je zeker weten de juiste beslissing maakt.{' '}
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/Parketrenovatie/schuren-en-oliën-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};
export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full bg-bgColor">
      <Hero />
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/schuren-en-oliën-1.png"
        pageName="Schuren en oliën"
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        bottomText="Mijn vloer heeft nu echt een opknapbeurt nodig!"
        title="Hoe gaat schuren en oliën in zijn werk?"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/schuren-en-oliën-4.png'}
        secondImg="/Parketrenovatie/schuren-en-oliën-5.png"
        thirdImg="/Parketrenovatie/schuren-en-oliën-6.png"
        fourthImg="/Parketrenovatie/schuren-en-oliën-7.png"
        fifthImg="/Parketrenovatie/schuren-en-oliën-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
