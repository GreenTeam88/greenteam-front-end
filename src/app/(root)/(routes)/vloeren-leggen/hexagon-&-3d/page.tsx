import { FAQSection, FAQType } from '@/components/FAQSection';
import { RatingSection } from '@/components/ratingSection';
import { BodyText } from '@/components/theme/typography';
import { CardsSection } from '../_components/cardsSection';
import { ListCard } from '../_components/listCard';
import { StoreSection } from '../_components/storeSection';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { InfoCardProps } from '../../diensten/_components/cards';
import { QuestionSection } from '../../over-ons/_components/question';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Hexagon',
    imgSrc: '/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-2.png',
    paragraphs: [
      <div key="1">
        Hexagonale tegels zijn dé keuze voor wie een interieur met karakter wil. Deze zeshoekige tegels creëren een
        opvallend honingraatpatroon dat elke ruimte direct een moderne uitstraling geeft. Of het nu gaat om een
        stijlvolle keuken, een trendy badkamer, of een andere leefruimte, met hexagonale tegels kiest u voor:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Creativiteit in vorm: een artistieke en speelse look</li>
        <li>Onbegrensde mogelijkheden: kies uit talloze kleuren en texturen</li>
        <li>Duurzaamheid: een vloer die lang meegaat én indruk maakt</li>
      </ul>,
      <p key="4" className="mb-9">
        Breng een eigentijdse twist aan in uw woning met hexagonale tegels! {' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: '3D',
    imgSrc: '/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-3.png',
    paragraphs: [
      <div key="1">
        Ga voor een vloer die niet alleen praktisch is, maar ook een visueel statement maakt. Een 3D-vloer brengt diepte
        en illusie, waardoor uw interieur een unieke uitstraling krijgt.{' '}
      </div>,
      <div key="2">Denk aan:</div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Meeslepende effecten: transformeer uw woning met visuele diepte</li>
        <li>Innovatieve stijl: perfect voor wie durft op te vallen</li>
        <li>Een persoonlijke touch: creëer een vloer die écht uniek is</li>
      </ul>,
      <p key="4" className="mb-9">
        Maak uw interieur tot een ware eyecatcher met een 3D-vloer!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault">Dit gebeurt standaard na het opschuren. </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Hexagonale tegels bieden een uniek en modern ontwerp, zijn veelzijdig in gebruik en kunnen een interessante visuele impact creëren in elke ruimte.',
    question: 'Wat zijn de voordelen van hexagonale tegels?',
  },
  {
    question: 'Kunnen hexagonale tegels binnen en buiten worden gebruikt?',
    answer:
      'Ja, hexagonale tegels zijn geschikt voor zowel binnen- als buitentoepassingen, mits ze van de juiste materialen zijn gemaakt.',
  },
  {
    question: 'Hoe onderhoud ik hexagonale tegels?',
    answer:
      'Het onderhoud is eenvoudig: regelmatig schoonmaken met milde reinigingsmiddelen en het toepassen van een geschikte sealer kan de levensduur verlengen.',
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
  imgSrc: '/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-9.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName=" Hexagon en 3D"
        listTitle="Herkenbaar?"
        listItems={['Verouderde uitstraling', 'Hardnekkige vlekken', 'Achterstallig onderhoud', 'Doffe plekken']}
        btnLink="/offerte-aanvragen2"
        btnText="Offerte berekenen"
        imgSrc="/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-4.png'}
        secondImg="/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-5.png"
        thirdImg="/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-6.png"
        fourthImg="/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-7.png"
        fifthImg="/vloeren-leggen/hexagon-&-3d/hexagon-&-3d-8.png"
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
