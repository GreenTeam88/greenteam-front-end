import { CardsSection } from '@/components/cardsSection';
import { BodyText } from '@/components/theme/typography';
import { FAQSection, FAQType } from '../_components/FAQSection';
import { SecondSection } from '../_components/secondSection';
import { StoreSection } from '../_components/store';
import { WhatWaitingForCard } from '../_components/whatWaitingForSection';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { RatingSection } from '../../_components/ratingSection';
import { InfoCardProps } from '../../diensten/_components/cards';
import { QuestionSection } from '../../over-ons/_components/question';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Aanhelen',
    imgSrc: '/Parketrenovatie/aanhelen-uitbreiden-2.png',
    paragraphs: [
      <>
        Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen
        zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment
        onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is
        je houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar
        wat aan te doen!{' '}
      </>,
      <>
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </>,
    ],
  },
  {
    title: 'Uitbreiden',
    imgSrc: '/Parketrenovatie/aanhelen-uitbreiden-3.png',
    paragraphs: [
      <>
        <BodyText>
          Bij een verbouwing kan het gebeuren dat uw vloer onaf lijkt, bijvoorbeeld na het verwijderen van een muur of
          het plaatsen van een aanbouw. Wij vullen ontbrekende delen aan, zodat uw vloer weer een geheel vormt. Onze
          specialist komt bij u langs om de houtsoort en plank afmetingen vast te stellen, zodat we perfect bijpassend
          hout kunnen bestellen en uw vloer naadloos kunnen uitbreiden.
        </BodyText>{' '}
      </>,
      <>
        <BodyText>
          Om het nieuwe deel volledig te laten aansluiten bij het bestaande, schuren en behandelen we de hele vloer na
          de uitbreiding. Zo krijgen zowel de oude als nieuwe delen dezelfde kleur en afwerking, waardoor uw vloer eruit
          ziet als één prachtig, uniform geheel.
        </BodyText>
      </>,
      <>
        <BodyText className="text-secondaryDefault">Dit gebeurt standaard na het hardwaxen.</BodyText>{' '}
      </>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is aanhelen en wanneer is het nodig?',

    answer:
      'Een vloer die is behandeld met lak vereist over het algemeen weinig onderhoud. Het is echter belangrijk om regelmatig te stofzuigen om krassen te voorkomen',
  },

  {
    question: 'Kan ik de vloer zelf aanhelen of moet ik een professional inschakelen',
    answer:
      'Hoewel sommige kleine beschadigingen zelf kunnen worden behandeld, is het inschakelen van een professional aanbevolen voor de beste resultaten en om schade te voorkomen.',
  },
  {
    question: 'Welke materialen zijn nodig voor het aanhelen van een houten vloer?',
    answer:
      ' Gewoonlijk zijn een schuurmachine, vulmiddel, lak of olie, en een kwast of roller nodig, afhankelijk van de schade en het type afwerking. ',
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
  imgSrc: '/Parketrenovatie/aanhelen-uitbreiden-9.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <SecondSection
        sectionName="Parket Renovatie"
        image="/Parketrenovatie/aanhelen-uitbreiden-1.png"
        pageName="Aanhelen/uitbreiden"
      />
      <CardsSection
        description="Stapsgewijs naar een perfect resultaat"
        btnText="Bereken jouw vloer"
        bottomText="Ik wil mijn parket door laten leggen  "
        title="Hoe gaat aanhelen in zijn werk?"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        firstImg={'/Parketrenovatie/aanhelen-uitbreiden-4.png'}
        secondImg="/Parketrenovatie/aanhelen-uitbreiden-5.png"
        thirdImg="/Parketrenovatie/aanhelen-uitbreiden-6.png"
        fourthImg="/Parketrenovatie/aanhelen-uitbreiden-7.png"
        fifthImg="/Parketrenovatie/aanhelen-uitbreiden-8.png"
      />
      <WhatWaitingForCard {...whatWaitingForConfig} className="lg:py-28" />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
