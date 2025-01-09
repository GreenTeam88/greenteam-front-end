import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { ListCard } from '@/components/listCard';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { VloerenleggenWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Walvisgraat',
    imgSrc: '/vloeren-leggen/walvisgraat/walvisgraat-2.png',
    paragraphs: [
      <div key="1">
        Walvisgraat is de elegante grote broer van de traditionele visgraatvloer. Dit patroon bestaat uit bredere en
        langere planken, waardoor het minder druk oogt en een kalme, harmonieuze sfeer creëert.{' '}
      </div>,
      <div key="2">Waarom kiezen voor walvisgraat? </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Rust en ruimte: De grotere planken zorgen voor een rustige uitstraling, ideaal voor grotere ruimtes. </li>
        <li>Warmte en stijl: De vloer brengt direct een gezellige sfeer in uw woning. </li>
        <li>Unieke look: Met zijn opvallende patroon blijft het een echte blikvanger. </li>
      </ul>,
      <p key="4" className="mb-9">
        Walvisgraat combineert de klassieke charme van visgraat met een moderne twist, perfect voor elk interieur. {' '}
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
      'Een walvisgraatvloer heeft bredere en langere planken dan een traditionele visgraatvloer, wat zorgt voor een robuust en elegant patroon.',
    question: 'Wat is een walvisgraatvloer en hoe verschilt het van een visgraatvloer?',
  },
  {
    question: 'Is een walvisgraatvloer moeilijker te leggen dan andere patronen?',
    answer:
      'Ja, vanwege het unieke patroon en de grotere planken vereist een walvisgraatvloer meer precisie en vakmanschap.',
  },
  {
    question: 'Welke soorten hout zijn geschikt voor een walvisgraatvloer?',
    answer: 'Eikenhout is een populaire keuze, maar andere houtsoorten zoals notenhout kunnen ook gebruikt worden.',
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
  imgSrc: '/vloeren-leggen/walvisgraat/walvisgraat-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function VloerenLeggenWalvisgraatPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Walvisgraat"
        listTitle="Wilt u dit voorkomen?"
        listItems={[
          'Een vloer die te druk oog',
          'Een vloer die oud en versleten is',
          'Beschadigingen die uw vloer ontsieren',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/walvisgraat/walvisgraat-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        btnLink="/offerte"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
      />
      <VloerenleggenWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/walvisgraat/walvisgraat-3.png'}
        secondImg="/vloeren-leggen/walvisgraat/walvisgraat-4.png"
        thirdImg="/vloeren-leggen/walvisgraat/walvisgraat-5.png"
        fourthImg="/vloeren-leggen/walvisgraat/walvisgraat-6.png"
        fifthImg="/vloeren-leggen/walvisgraat/walvisgraat-7.png"
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
