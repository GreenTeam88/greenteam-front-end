import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { Hero } from '@/components/hero';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { TraprenovatieWhyGreenTeam } from '../../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Wat is Beton Ciré?',
    imgSrc: '/traprenovatie/acoustic/acoustic-2.png',
    paragraphs: [
      <div key="1">
        Beton Ciré is een veelzijdige, decoratieve en waterdichte afwerking die perfect is voor vloeren, wanden,
        badkamers, keukens, keukenbladen en meubels. Dit sterke materiaal, bestaande uit een mengsel van cement, hars en
        kleurstoffen, wordt ambachtelijk met de hand aangebracht, waardoor een gladde, naadloze laag met een unieke
        betonlook ontstaat. Dankzij de duurzame en volledig waterdichte eigenschappen is het ideaal voor badkamers en
        keukens, zonder de zorgen van vieze of verkleurde voegen. Beton Ciré is verkrijgbaar in een breed scala aan
        kleuren en combineert een moderne, stoere uitstraling met een strakke, luxueuze afwerking die elke ruimte naar
        een hoger niveau tilt.
      </div>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een moderne en elegante upgrade te geven met een
          stijlvolle Beton Ciré afwerking!
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Acoustic Beton Ciré - strak design, stil comfort',
    imgSrc: '/traprenovatie/acoustic/acoustic-3.png',
    paragraphs: [
      <div key="1">
        Acoustic Beton Ciré is meer dan een vloer; het is een slimme investering in stijl en functionaliteit. Wat maakt
        dit materiaal bijzonder?
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Strakke uitstraling: Creëer een moderne, industriële look die past bij elk interieur. </li>
        <li>Akoestische voordelen: Demp ongewenst geluid en geniet van een rustiger leefklimaat. </li>
        <li>Naadloze afwerking: Voor een strak en luxueus resultaat zonder naden of kieren.  </li>
        <li>Praktisch en waterbestendig: Perfect voor drukke huishoudens en vochtige ruimtes.  </li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een stoere en unieke upgrade te geven met een
          stijlvolle Beton Ciré Acoustic afwerking!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is beton cire acoustic?',
    answer:
      'Beton ciré acoustic is een speciale variant van beton cire die ontworpen is om geluidsabsorberende eigenschappen te bieden.',
  },
  {
    question: 'Waar kan ik beton ciré acoustic gebruiken?',
    answer:
      'Deze afwerking is geschikt voor verschillende toepassingen, waaronder wanden en plafonds in woonruimtes, commerciële gebouwen en openbare instellingen, waar akoestiek belangrijk is.',
  },
  {
    question: 'Hoe onderhoud ik beton ciré acoustic?',
    answer: 'Het onderhoud omvat regelmatig schoonmaken met een zachte doek en een milde schoonmaakoplossing.',
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
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al langere tijd van een moderne vloer met Acoustic Beton Ciré?. Bereken via de knop hieronder wat het
      kost en neem contact met ons op voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor
      soort hout u heeft, wat de mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weet dat u
      de juiste beslissing maakt. Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de
      klus aan ons uitbesteed. In heel veel gevallen is deze afspraak niet nodig en is advies via mail contact met
      foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/acoustic/acoustic-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function TraprenovatieBetonCireAcoustic() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Beton Ciré Acoustic"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/acoustic/acoustic-1.png"
        orangeText="Geen zorgen, wij hebben een moderne oplossing!"
      />
      <CardsSection
        bottomText="Help, mijn oude trap is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
      />
      <TraprenovatieWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        firstImg={'/traprenovatie/acoustic/acoustic-4.png'}
        firstImgTopText="Venetiaans"
        firstImgBottomText="Kuipersstraat, Amsterdam"
        secondImgTopText="Metal stuk"
        secondImgBottomText="Rondebeltweg, Almere"
        thirdImgTopText="Croco"
        thirdImgBottomText="Tooropstraat, Nijmegen"
        fourthImgTopText="Venetiaans"
        fourthImgBottomText="Oude Langendijk, Delft"
        fifthImgTopText=""
        fifthImgBottomText="Stromarkt, Deventer"
        secondImg="/traprenovatie/acoustic/acoustic-5.png"
        thirdImg="/traprenovatie/acoustic/acoustic-6.png"
        fourthImg="/traprenovatie/acoustic/acoustic-7.png"
        fifthImg="/traprenovatie/acoustic/acoustic-8.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de trappenspecialist langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
