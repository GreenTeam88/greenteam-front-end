import Script from 'next/script';

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
    title: 'Bourgogne vloer laten leggen',
    imgSrc: '/vloeren-leggen/bourgogne/bourgogne-2.png',
    paragraphs: [
      <div key="1">
        Een Bourgogne vloer is veel meer dan alleen een vloer; het is een kunstwerk uit de Franse regio Bourgondië. Deze
        massief eikenhouten planken, met hun diverse breedtes en lengtes, creëren een unieke, warme uitstraling die
        perfect past in elke ruimte.{' '}
      </div>,
      <div key="2">Denk aan:</div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Authentieke charme: een vloer die vakmanschap ademt </li>
        <li>Duurzame kwaliteit: geolied hout dat jaren meegaat</li>
        <li>Stijlvol veelzijdig: geschikt voor zowel moderne als klassieke interieurs </li>
      </ul>,
      <p key="4" className="mb-9">
        Met een Bourgogne vloer geeft u uw huis niet alleen karakter, maar ook een warme, uitnodigende sfeer waar u elke
        dag van geniet.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Het bourgondische patroon is een type vloeren-patroon dat vaak wordt gebruikt in hout- en tegelvloeren. Het staat bekend om zijn elegante en symmetrische ontwerp.',
    question: 'Wat is het bourgondische patroon en waar wordt het gebruikt?',
  },
  {
    question: 'Is het moeilijk om een bourgondische vloer te leggen? ',
    answer:
      'Het leggen van een bourgondische vloer vereist precisie en ervaring vanwege de complexe patronen. Het is raadzaam om een professional in te schakelen voor een nauwkeurige installatie.',
  },
  {
    question: 'Hoe onderhoud ik een bourgondische vloer?',
    answer:
      'Regelmatig schoonmaken met een zachte bezem of stofzuiger is belangrijk. Daarnaast is het aan te raden om de vloer af en toe te behandelen met de juiste onderhoudsproducten om de levensduur en uitstraling te behouden.',
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
      Als dit is wat u wilt, waar wacht u dan op. Bereken via de knop hieronder wat het kost en neem contact met ons op
      voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort hout u heeft, wat de
      mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weten de juiste beslissing maakt.{' '}
    </BodyText>,
    <BodyText key="2">
      Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed. In
      heel veel gevallen is deze afspraak niet nodig, en is advies via mailcontact met foto’s voldoende.{' '}
    </BodyText>,
  ],
  imgSrc: '/vloeren-leggen/bourgogne/bourgogne-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function VloerenLeggenBourgognePage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Bourgogne"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van overmatig gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Oud-bollige uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/bourgogne/bourgogne-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <VloerenleggenWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/bourgogne/bourgogne-3.png'}
        secondImg="/vloeren-leggen/bourgogne/bourgogne-4.png"
        thirdImg="/vloeren-leggen/bourgogne/bourgogne-5.png"
        fourthImg="/vloeren-leggen/bourgogne/bourgogne-6.png"
        fifthImg="/vloeren-leggen/bourgogne/bourgogne-7.png"
        firstImgTopText="Bourgogne"
        firstImgBottomText="Poortstraat, Utrecht"
        secondImgTopText="Bourgogne"
        secondImgBottomText="Zestienhovensekade, Rotterdam"
        thirdImgTopText="Bourgogne"
        thirdImgBottomText="Binnensingel, Vlaardingen"
        fourthImgTopText="Bourgogne"
        fourthImgBottomText="Azalealaan, Helmond"
        fifthImgTopText="Bourgogne"
        fifthImgBottomText="Parkhaven, Lelystad"
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
