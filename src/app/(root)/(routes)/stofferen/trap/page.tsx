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
    title: 'Trapstoffering - stijlvol, duurzaam en veilig',
    imgSrc: '/stofferen/trap/trap-2.png',
    paragraphs: [
      <div key="1">
        Met onze trapstoffering service maken we van uw trap een echte blikvanger. Dit is hoe wij te werk gaan: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Nauwkeurige meting: We meten uw trap zorgvuldig op voor een perfect resultaat. </li>
        <li>
          Grondige voorbereiding: We verwijderen oude bekleding en bereiden de trap voor op de nieuwe stoffering. 
        </li>
        <li>Hoogwaardige materialen: Kies uit een breed scala aan stoffen die passen bij uw stijl en interieur. </li>
        <li>Strakke afwerking: Onze vakmensen bekleden uw trap met precisie, voor een naadloze en duurzame look.  </li>
        <li>
          Comfort en veiligheid: Zorg voor een trap die er niet alleen goed uitziet, maar ook prettig en veilig is om op
          te lopen. 
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met onze trapstoffering service krijgt uw trap een tweede leven, volledig afgestemd op uw wensen en interieur.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw trap er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Kunnen jullie ook de zijkanten stofferen?',
    answer: (
      <BodyText>
        Wij kunnen uw trap met of zonder zijkanten stofferen.
        <br />
        Eventuele overlopen of plateaus kunnen ook worden meegenomen indien gewenst.
      </BodyText>
    ),
  },
  {
    question: 'Hoe kan ik de veiligheid van mijn trap verbeteren?',
    answer:
      'Veiligheid kan worden verbeterd door antislipmaterialen te gebruiken, goede verlichting te installeren en trapleuningen te plaatsen op de juiste hoogte.',
  },
  {
    question: 'Wat zijn de kosten van traprenovatie?',
    answer:
      'De kosten variëren afhankelijk van het type trap, het materiaal en de complexiteit van de renovatie. Zo is een dichte trap minder ingewikkeld dan een open trap.',
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
      Droomt u al langer van een nieuwe look voor uw trap? Bereken via de knop hieronder wat het kost en neem contact
      met ons op voor een afspraak.{' '}
    </BodyText>,
  ],
  imgSrc: '/stofferen/trap/trap-8.png',
  buttonText: 'offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Stofferen"
        pageName="Trap"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Opvallend kleurverschil',
          'Hardnekkige vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/stofferen/trap/trap-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Klaar om uw trap te vernieuwen?"
        title="Hoe wij uw trap transformeren"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de transformaties van onze stoffeerservice voor trappen en zie hoe we oude en versleten trappen vernieuwen met prachtige en duurzame stoffen. Onze tevreden klanten zijn lovend over onze vakmanschap, en uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/stofferen/trap/trap-3.png'}
        secondImg="/stofferen/trap/trap-4.png"
        thirdImg="/stofferen/trap/trap-5.png"
        fourthImg="/stofferen/trap/trap-6.png"
        fifthImg="/stofferen/trap/trap-7.png"
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
