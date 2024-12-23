import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { ListCard } from '../_components/listCard';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'PVC Leggen',
    imgSrc: '/vloeren-leggen/pvc-leggen/pvc-leggen-2.png',
    paragraphs: [
      <div key="1">
        Een PVC-vloer is niet zomaar een keuze; het is een investering in een vloer die jarenlang meegaat zonder gedoe.
      </div>,
      <div key="2">Wat maakt PVC zo bijzonder?</div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Duurzaamheid: Dankzij de slijtvaste eigenschappen blijft de vloer er als nieuw uitzien, zelfs bij intensief
          gebruik.
        </li>
        <li>
          Onderhoudsvriendelijk: Geen gedoe met lastige schoonmaak of reparaties - PVC is eenvoudig schoon te houden. 
        </li>
        <li>Krasbestendig: In tegenstelling tot houten vloeren, heb je minder snel last van krassen.  </li>
        <li>
          Perfect gelegd: Onze ervaren parketteurs zorgen voor een strak en professioneel resultaat, van voorbereiding
          tot afwerking. 
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met PVC kiest u voor een vloer die zowel praktisch als stijlvol is, zonder concessies.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold ">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer: 'De duur hangt af van de grootte van de ruimte en de voorbereiding, maar gemiddeld duurt het 1-2 dagen.',
    question: 'Hoelang duurt het om een PVC-vloer te leggen?',
  },
  {
    question: 'Kan PVC over een bestaande vloer gelegd worden?  ',
    answer: 'Ja, mits de ondergrond vlak en stabiel is.',
  },
  {
    question: 'Is PVC-vloer geschikt voor vloerverwarming?',
    answer: 'Ja, PVC werkt goed met vloerverwarming.',
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
  title: 'Waar wacht u op!',
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
  imgSrc: '/vloeren-leggen/pvc-leggen/pvc-leggen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="PVC"
        listTitle="Ervaar jij ook de volgende problemen met uw vloer?"
        listItems={[
          'Geen vloer die jarenlang meegaat',
          'Een vloer die oud en onverzorgd oogt',
          'Een slecht gelegd resultaat dat niet voldoet aan uw wensen',
          'Slijtage die steeds zichtbaarder wordt',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/pvc-leggen/pvc-leggen-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/pvc-leggen/pvc-leggen-3.png'}
        secondImg="/vloeren-leggen/pvc-leggen/pvc-leggen-4.png"
        thirdImg="/vloeren-leggen/pvc-leggen/pvc-leggen-5.png"
        fourthImg="/vloeren-leggen/pvc-leggen/pvc-leggen-6.png"
        fifthImg="/vloeren-leggen/pvc-leggen/pvc-leggen-7.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
