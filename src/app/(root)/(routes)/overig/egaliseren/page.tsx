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
import { OverigWhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Egaliseren',
    imgSrc: '/overig/egaliseren/egaliseren-2.png',
    paragraphs: [
      <div key="1">
        Een geëgaliseerde vloer is essentieel voor een strak en professioneel eindresultaat. Onze aanpak: {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Voorbereiden van de vloer: We reinigen en inspecteren de bestaande vloer grondig om een stabiele basis te
          garanderen. {' '}
        </li>
        <li>
          Egaliseren: We brengen een hoogwaardige egalisatiemortel aan en strijken deze glad, zodat alle oneffenheden
          verdwijnen. {' '}
        </li>
        <li>
          Vlakke ondergrond: Na uitharding is de vloer strak en vlak, ideaal voor elke vloerafwerking zoals tegels,
          laminaat, PVC of tapijt. {' '}
        </li>
        <li>
          Klaar voor de afwerking: Een perfecte basis zorgt ervoor dat uw nieuwe vloer niet alleen mooi oogt, maar ook
          lang meegaat. {' '}
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met onze professionele legalisatieservice creëert u een solide en duurzame basis die uw interieur naar een hoger
        niveau tilt.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Zakelijk',
    imgSrc: '/overig/egaliseren/egaliseren-3.png',
    paragraphs: [
      <div key="1">
        Op zoek naar de mogelijkheden voor het egaliseren in een bedrijfsruimte, kantoorpand, hotel, winkel, spa of
        sportzaal? Green Team is een betrouwbare en geschikte partner voor jouw zakelijke project. Hierbij zorgen we
        niet alleen voor een correcte levering en plaatsing of renovatie van de vloer, we geven ook advies voor de beste
        vloer voor jouw bedrijfsruimte en zorgen uiteraard voor een vakkundige afwerking van de vloer.{' '}
      </div>,

      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">Bespreek met ons de mogelijkheden </BodyText>
      </div>,
    ],
    buttonText: 'Lees meer...',
    buttonLink: '/zakelijk',
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat is het doel van egaliseren?',
    answer:
      'Het egaliseren van een vloer zorgt voor een vlakke, stevige ondergrond, waardoor de vloerbedekking beter kan worden aangebracht en ongelijkheden worden verminderd.',
  },
  {
    question: 'Hoelang duurt het egaliseren van een vloer?',
    answer:
      'De duur hangt af van de grootte van de ruimte en de gebruikte egalisatieproducten, maar meestal duurt het proces enkele uren tot een dag. Ook de droogtijden kunnen variëren.',
  },
  {
    question: 'Kan ik zelf een vloer egaliseren, of is het beter om een professional in te schakelen?',
    answer:
      'Zelf egaliseren is mogelijk met de juiste kennis en materialen, maar voor de beste resultaten en om fouten te voorkomen, is het vaak raadzaam om een professional in te schakelen.',
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
  title: 'Waar wacht je op!',
  paragraphs: [
    <BodyText key="1">
      Droomt u al jaren van een nieuwe egale vloer?Bereken via de knop hieronder wat het kost en neem contact met ons op
      voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort vloer u heeft, wat de
      mogelijkheden zijn en ons advies zodat u zeker weet dat u de juiste beslissing maakt. Deze afspraak kost eenmalig
      €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/overig/egaliseren/egaliseren-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function OverigEgaliserenPage() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <ListCard
        sectionName="Overig"
        pageName="Egaliseren"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage door intensief gebruik',
          'Krakende vloer',
          'Vloer is niet recht',
          'Verouderde uitstraling ',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/overig/egaliseren/egaliseren-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw vloer"
        btnLink="/offerte"
      />
      <OverigWhyGreenTeam />

      <StoreSection
        title="Wat hebben wij in petto? Jouw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze egalisatiediensten en ontdek de ongeëvenaarde kwaliteit en afwerking voor jouw vloer. Wij zorgen voor een perfecte ondergrond, wat bijdraagt aan een duurzaam en aantrekkelijk resultaat. Veel tevreden klanten hebben al gekozen voor onze egalisatie, en u kunt de volgende zijn!"
        btnText="Bereken uw vloer"
        btnLink="/offerte"
        firstImg={'/overig/egaliseren/egaliseren-4.png'}
        secondImg="/overig/egaliseren/egaliseren-5.png"
        thirdImg="/overig/egaliseren/egaliseren-6.png"
        fourthImg="/overig/egaliseren/egaliseren-7.png"
        fifthImg="/overig/egaliseren/egaliseren-8.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de specialist langs komt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />

      <RatingSection />
    </div>
  );
}
