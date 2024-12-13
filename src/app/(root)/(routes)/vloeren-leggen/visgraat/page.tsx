import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { ListCard } from '../_components/listCard';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Visgraat',
    imgSrc: '/vloeren-leggen/visgraat/visgraat-2.png',
    paragraphs: [
      <div key="1">
        Een visgraatvloer brengt direct elegantie en stijl in uw woning. Dit klassieke patroon wordt gecreëerd door
        houten, laminaat- of PVC-planken in een schuin patroon te leggen, waardoor ze lijken op de graten van een vis.{' '}
      </div>,
      <div key="2">Wat maakt dit patroon zo speciaal? </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Tijdloze uitstraling: Een visgraatvloer past zowel in moderne als klassieke interieurs. </li>
        <li>Unieke variaties: Kies voor kleine of grote graten om het patroon aan te passen aan uw ruimte. </li>
        <li>Karakteristiek design: Het opvallende patroon geeft uw vloer direct meer persoonlijkheid.  </li>
      </ul>,
      <p key="4" className="mb-9">
        Of u nu een warme houten vloer wilt of een onderhoudsvriendelijke PVC-variant, een visgraatpatroon brengt uw
        interieur naar een hoger niveau. 
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Ja, een visgraatvloer kan gecombineerd worden met vloerverwarming, mits de vloer op de juiste manier wordt gelegd.',
    question: 'Is een visgraatvloer geschikt voor vloerverwarming?',
  },
  {
    question: 'Hoeveel extra materiaal heb ik nodig bij een visgraatpatroon?',
    answer:
      'Bij het leggen van een visgraatvloer wordt vaak aangeraden om 10-15% extra materiaal te bestellen vanwege snijverlies.',
  },
  {
    question: 'Wat is het verschil tussen visgraat en een standaard plankenvloer?',
    answer:
      'Een visgraatvloer heeft een uniek, diagonaal patroon, terwijl een standaard plankenvloer rechte planken parallel aan elkaar heeft.',
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
  imgSrc: '/vloeren-leggen/visgraat/visgraat-8.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Visgraat"
        listTitle="Herkent u deze signalen?"
        listItems={[
          'Uw vloer is oud en beschadigd',
          'U vindt uw vloer saai en inspiratieloos',
          'Slijtage heeft uw vloer minder aantrekkelijk gemaakt',
          'Het is tijd voor een nieuwe frisse look',
        ]}
        btnLink="/offerte-aanvragen"
        btnText="Offerte berekenen"
        imgSrc="/vloeren-leggen/visgraat/visgraat-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        btnLink="/offerte-aanvragen"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <WhyGreenTeam />
      <StoreSection
        btnLink="/offerte-aanvragen"
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/vloeren-leggen/visgraat/visgraat-3.png'}
        secondImg="/vloeren-leggen/visgraat/visgraat-4.png"
        thirdImg="/vloeren-leggen/visgraat/visgraat-5.png"
        fourthImg="/vloeren-leggen/visgraat/visgraat-6.png"
        fifthImg="/vloeren-leggen/visgraat/visgraat-7.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
