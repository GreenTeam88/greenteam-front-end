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
    imgSrc: '/traprenovatie/brut/brut-2.png',
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
    title: 'Beton Ciré Brut - stoer, stijlvol en tijdloos',
    imgSrc: '/traprenovatie/brut/brut-3.png',
    paragraphs: [
      <div key="1">
        Wilt u uw interieur een moderne, industriële upgrade geven? Kies dan voor Beton Ciré Brut - een unieke afwerking
        die kracht en verfijning combineert. Dit veelzijdige materiaal is perfect voor vloeren, wanden en meubels en
        biedt: 
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Robuuste uitstraling: Een stoere, naadloze afwerking die direct een eigentijdse sfeer creëert. </li>
        <li>Duurzaam en slijtvast: Ideaal voor intensief gebruikte ruimtes zoals keukens, badkamers en woonkamers. </li>
        <li>Waterbestendig: Geen zorgen over vocht, perfect voor natte ruimtes. </li>
        <li>Veelzijdigheid: Geschikt voor elke stijl, van minimalistisch tot luxueus. </li>
      </ul>,
      <div key="4">
        Creëer een tijdloze, luxe look met Beton Ciré Brut en combineer stijl met functionaliteit in uw woning.
      </div>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een stoere en robuuste upgrade te geven met een
          authentieke Beton Ciré Brut afwerking!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is beton ciré brut?',
    answer:
      'Beton ciré brut is een ruwe, onbehandelde variant van beton cire die een industriële en authentieke uitstraling biedt, perfect voor moderne interieurs.',
  },
  {
    question: 'Is beton ciré brut geschikt voor vloeren?',
    answer:
      'Ja, beton ciré brut is zeer geschikt voor vloeren, maar het moet goed worden aangebracht en behandeld om slijtage en vlekken te voorkomen.',
  },
  {
    question: 'Hoe onderhoud ik beton ciré brut?',
    answer:
      'Onderhoud omvat regelmatig reinigen met een zachte doek en milde schoonmaakmiddelen. Het is ook belangrijk om een geschikte sealer aan te brengen voor extra bescherming.',
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
      Droomt u al langere tijd van een moderne vloer met Beton Ciré Brut? Bereken via de knop hieronder wat het kost en
      neem contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort
      hout u heeft, wat de mogelijkheden zijn, ons advies en we komen met de kleurstalen zodat u zeker weet dat u de
      juiste beslissing maakt. Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de
      klus aan ons uitbesteed. In heel veel gevallen is deze afspraak niet nodig en is advies via mail contact met
      foto’s voldoende.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/brut/brut-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function TraprenovatieBetonCireBrut() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/brut/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Brut"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/brut/brut-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        bottomText="Help, mijn oude interieur is aan vervanging toe!"
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
        firstImg={'/traprenovatie/brut/brut-4.png'}
        secondImg="/traprenovatie/brut/brut-5.png"
        thirdImg="/traprenovatie/brut/brut-6.png"
        fourthImg="/traprenovatie/brut/brut-7.png"
        fifthImg="/traprenovatie/brut/brut-8.png"
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
