import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Rode loper',
    imgSrc: '/stofferen/rode-loper/rode-loper-2.png',
    paragraphs: [
      <div key="1">
        Wilt u indruk maken met een stijlvolle entree? Met onze rode lopers voegt u direct een vleugje glamour en
        elegantie toe aan elke gelegenheid. Perfect voor speciale evenementen, feesten of om dagelijks een luxueuze
        uitstraling aan uw interieur te geven.{' '}
      </div>,
      <div key="2" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <p>Waarom kiezen voor onze rode lopers? </p>
        <ul key="3">
          <li>Onmiskenbare stijl: Creëer een stijlvolle, chique entree die de toon zet voor uw ruimte. </li>
          <li>Hoogwaardige kwaliteit: Gemaakt van duurzame materialen die comfortabel zijn onder de voeten. </li>
          <li>Veelzijdig: Ideaal voor feestelijke momenten én om uw dagelijkse interieur op te frissen.  </li>
          <li>Eenvoudig te combineren: Past moeiteloos bij elke inrichting of gelegenheid. </li>
        </ul>
      </div>,
      <p key="4" className="mb-9">
        Maak van uw ruimte een echte eyecatcher met een rode loper die klasse en verfijning uitstraalt.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is de functie van een rode loper?',
    answer:
      'Een rode loper wordt vaak gebruikt bij speciale evenementen, zoals premières en award shows, om een luxe en feestelijke sfeer te creëren en gasten te verwelkomen.',
  },
  {
    question: 'Hoe wordt een rode loper onderhouden?',
    answer:
      'Rode lopers moeten regelmatig worden gereinigd om vlekken en vuil te verwijderen. Dit kan gedaan worden met een stofzuiger of door professionele schoonmaakdiensten.',
  },
  {
    question: 'Kan ik een losse rode loper op maat bestellen bij jullie?',
    answer: 'Als u de afmetingen aan ons doorgeeft, kunt u bij ons een losse rode uitrolbare loper bestellen.',
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
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn. Het is ook belangrijk dat de ruimte goed toegankelijk is, omdat we vaak werken met zware professionele machines die naar de werkplek gebracht moeten worden. ',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al langere tijd van een luxueuze rode loper?. Bereken via de knop hieronder wat het kost en neem contact
      met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort tapijt u wilt
      laten plaatsen, wat de mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weet dat u de
      juiste beslissing maakt. Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de
      klus aan ons uitbesteed
    </BodyText>,
  ],
  imgSrc: '/stofferen/rode-loper/rode-loper-8.png',
  buttonText: 'Direct Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Stofferen"
        pageName="Rode loper"
        listTitle="Herkenbaar?"
        listItems={[
          'Een entree die sfeer en stijl mist',
          'Geen duidelijke route voor gasten',
          'Een onverzorgde eerste indruk',
          'Gebrek aan een luxe uistraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/rode-loper/rode-loper-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude tapijt is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw rode loper"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze rode lopers en ontdek hoe we gewone ruimtes omtoveren tot stijlvolle en feestelijke entreegebieden. Veel tevreden klanten zijn enthousiast over de kwaliteit en uitstraling van onze rode lopers, en uw evenement kan de volgende zijn!"
        btnText="Bereken uw rode loper"
        firstImg={'/stofferen/rode-loper/rode-loper-3.png'}
        secondImg="/stofferen/rode-loper/rode-loper-4.png"
        thirdImg="/stofferen/rode-loper/rode-loper-5.png"
        fourthImg="/stofferen/rode-loper/rode-loper-6.png"
        fifthImg="/stofferen/rode-loper/rode-loper-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
