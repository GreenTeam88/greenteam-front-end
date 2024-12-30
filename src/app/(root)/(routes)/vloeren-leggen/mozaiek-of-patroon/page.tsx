import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { ListCard } from '@/components/listCard';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { VloerenleggenWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Mozaïek',
    imgSrc: '/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-2.png',
    paragraphs: [
      <div key="1">
        Mozaïektegels zijn de ultieme keuze voor wie op zoek is naar iets bijzonders. Met kleine door de hand geplaatste
        stukjes vormen ze unieke, artistieke patronen die elke ruimte verrijken.{' '}
      </div>,
      <div key="2">Denk aan:</div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Elegantie en karakter: Voeg een verfijnde uitstraling toe aan uw keuken, badkamer of entree.  </li>
        <li>Praktisch en duurzaam: Mozaïek is stevig en bestand tegen dagelijks gebruik.  </li>
        <li>Veelzijdige toepassing: Geschikt voor muren én vloeren, voor een complete look. </li>
      </ul>,
      <p key="4" className="mb-9">
        Met mozaïektegels straalt uw interieur stijl en exclusiviteit uit!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Patroon',
    imgSrc: '/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-3.png',
    paragraphs: [
      <div key="1">
         Een patroonvloer tilt uw interieur naar een hoger niveau. Denk aan designs zoals visgraat, chevron of
        hexagonaal, die uw vloer diepte en persoonlijkheid geven.{' '}
      </div>,
      <div key="2">Kies patronen voor: </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Unieke uitstraling: Een vloer die uw ruimte echt laat opvallen. </li>
        <li>Veelzijdigheid: Passend bij moderne én klassieke interieurs. </li>
        <li>Diepte en karakter: Voeg warmte en structuur toe aan uw vloer. </li>
      </ul>,
      <p key="4" className="mb-9">
        Met een patroonvloer creëert u een sfeervolle en unieke woonomgeving. {' '}
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
      'Mozaïekvloeren zijn veelzijdig, duurzaam en geven een unieke uitstraling aan elke ruimte. Ze zijn ook eenvoudig te onderhouden en verkrijgbaar in diverse materialen en ontwerpen.',
    question: 'Wat zijn de voordelen van mozaïekvloeren?',
  },
  {
    question: 'Hoe wordt een mozaïekvloer gelegd?',
    answer:
      'Een mozaïekvloer wordt meestal in een specifiek patroon gelegd, waarbij de tegels of stukjes handmatig worden geplaatst en bevestigd met lijm of voegmiddel.',
  },
  {
    question: 'Is het moeilijk om een mozaïekpatroon zelf te maken?',
    answer:
      'Het maken van een mozaïekpatroon kan enige vaardigheid en geduld vereisen, vooral bij complexe ontwerpen. Voor beginners is het raadzaam om met eenvoudigere patronen te beginnen of een professional in te schakelen.',
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
  imgSrc: '/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Mozaïek en patroon"
        listTitle="Kiest u ook voor meer stijl en karakter?"
        listItems={['Kunstzinnige mozaïekpatronen', 'Tijdloze charme', 'Duurzaam', 'Een opvallend interieur']}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
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
        firstImg={'/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-4.png'}
        secondImg="/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-5.png"
        thirdImg="/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-6.png"
        fourthImg="/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-7.png"
        fifthImg="/vloeren-leggen/mozaïek-en-patroon/mozaïek-en-patroon-8.png"
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
