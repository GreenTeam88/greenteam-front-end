import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { ListCard } from '../_components/listCard';
import { VloerenleggenWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Weense punt',
    imgSrc: '/vloeren-leggen/weense-punt/weense-punt-2.png',
    paragraphs: [
      <div key="1">
        De Weense punt is een verfijnd vloerpatroon dat geïnspireerd is op de Hongaarse punt, maar met zachtere hoeken.
        Dit elegante design geeft uw interieur een tijdloze en serene uitstraling.{' '}
      </div>,
      <div key="2">
        <div> Waarom kiezen voor een Weense punt?  </div>
        <ul key="3" className="flex flex-col pb-3  list-disc gap-4 list-inside">
          <li>
            Harmonieuze uitstraling: De hoeken van 135 graden creëren een subtiele, rustige illusie van visgraat. 
          </li>
          <li>
            Ruimte- optimalisatie: Ideaal voor zowel grote als kleine ruimtes, doordat het patroon de vloer ruimer doet
            lijken.  
          </li>
          <li>Stijlvolle veelzijdigheid: Past perfect in moderne én klassieke interieurs. </li>
        </ul>
      </div>,
      <p key="4" className="mb-9">
        Met de Weense punt voegt u niet alleen stijl toe, maar ook een gevoel van rust en ruimte aan uw woning. {' '}
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
      'Een Weense punt is vergelijkbaar met de Hongaarse punt, maar de planken worden onder een scherpe hoek van 30 graden gelegd, wat een subtieler patroon creëert.',
    question: 'Wat is een Weense punt vloer en hoe verschilt het van andere legpatronen?',
  },
  {
    question: 'Is een Weense punt vloer geschikt voor elk type ruimte?',
    answer:
      'Ja, het patroon kan zowel in kleine als grote ruimtes gebruikt worden om een elegante uitstraling te creëren.',
  },
  {
    question: 'Zijn er specifieke houtsoorten die beter geschikt zijn voor een Weense punt?',
    answer: 'Eiken is populair, maar andere houtsoorten zoals esdoorn en beuken kunnen ook worden gebruikt.',
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
  imgSrc: '/vloeren-leggen/weense-punt/weense-punt-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Weense punt"
        listTitle="Herkent u dit?"
        listItems={[
          ' Een gedateerde vloer die niet meer bij u past',
          'Beschadigingen door slijtage die steeds zichtbaarder worden',
          'Een saaie uitstraling waar u op uitgekeken bent',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/weense-punt/weense-punt-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        btnLink="/offerte"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <VloerenleggenWhyGreenTeam />
      <StoreSection
        btnLink="/offerte"
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/vloeren-leggen/weense-punt/weense-punt-3.png'}
        secondImg="/vloeren-leggen/weense-punt/weense-punt-4.png"
        thirdImg="/vloeren-leggen/weense-punt/weense-punt-5.png"
        fourthImg="/vloeren-leggen/weense-punt/weense-punt-6.png"
        fifthImg="/vloeren-leggen/weense-punt/weense-punt-7.png"
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
