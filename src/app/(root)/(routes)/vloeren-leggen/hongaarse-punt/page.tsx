import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { ListCard } from '../_components/listCard';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { VloerenleggenWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Hongaarse punt',
    imgSrc: '/vloeren-leggen/hongaarse-punt/hongaarse-punt-2.png',
    paragraphs: [
      <div key="1">
        Het subtiele verschil tussen een visgraatvloer en een Hongaarse punt maakt een wereld van verschil in
        uitstraling. Waar visgraatvloeren een hoek van 90 graden hebben, bieden Hongaarse punt-vloeren een speelser en
        eleganter effect door de planken in een hoek van 45 of 60 graden te plaatsen. {' '}
      </div>,
      <div key="2">Met de Hongaarse punt kies je voor: </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Strakke lijnen en symmetrie: Een vloer waarbij de planken perfect tegen elkaar aansluiten. </li>
        <li>
          Aanpasbare stijl: Wilt u een rustige en verfijnde uitstraling? Ga voor 60 graden. Liever een speels en
          dynamisch effect? Kies dan voor 45 graden.  
        </li>
        <li>Een tijdloze look: Ideaal voor zowel moderne als klassieke interieurs.  </li>
      </ul>,
      <p key="4" className="mb-9">
        Of u nu een warmere sfeer wilt creëren of een luxueuze uitstraling zoekt, de Hongaarse punt combineert
        vakmanschap met veelzijdigheid.{' '}
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
      'Het verschil zit in de hoeken: bij een Hongaarse punt worden de planken onder een hoek van 45 of 60 graden gelegd, terwijl bij visgraat de planken haaks op elkaar liggen.',
    question: 'Wat is het verschil tussen een Hongaarse punt en visgraatpatroon?',
  },
  {
    question: 'Is een Hongaarse punt duurder om te leggen dan andere vloeren?',
    answer: 'Ja, dit patroon vereist meer precisie en tijd, waardoor het vaak iets duurder is dan rechte planken.',
  },
  {
    question: 'Welke houtsoorten zijn geschikt voor een Hongaarse punt?',
    answer: 'Eikenhout is populair, maar andere houtsoorten zoals walnoot of esdoorn kunnen ook gebruikt worden.',
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
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weten de juiste beslissing maakt.
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.{' '}
    </BodyText>,
  ],
  imgSrc: '/vloeren-leggen/hongaarse-punt/hongaarse-punt-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Hongaarse punt"
        listTitle="Toe aan een nieuwe vloer?"
        listItems={[
          'Slijtage van overmatig gebruik',
          'Extreem veel krasjes',
          'Vieze vlekken in de vloer',
          'Oud-bollige uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/hongaarse-punt/hongaarse-punt-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
      />
      <VloerenleggenWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/hongaarse-punt/hongaarse-punt-3.png'}
        secondImg="/vloeren-leggen/hongaarse-punt/hongaarse-punt-4.png"
        thirdImg="/vloeren-leggen/hongaarse-punt/hongaarse-punt-5.png"
        fourthImg="/vloeren-leggen/hongaarse-punt/hongaarse-punt-6.png"
        fifthImg="/vloeren-leggen/hongaarse-punt/hongaarse-punt-7.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection category="Parketrenovatie" />
      <RatingSection />
    </div>
  );
}
