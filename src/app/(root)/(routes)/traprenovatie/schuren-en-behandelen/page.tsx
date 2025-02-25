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
import { TraprenovatieWhyGreenTeam } from '../_components/whyGreenTeam';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Schuren en behandelen - voor een perfecte afwerking',
    imgSrc: '/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-2.png',
    paragraphs: [
      <div key="1">
        Onze schuur - en behandeling service brengt uw trap terug in topconditie. Wat kunt u verwachten? {' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Grondig schuren: Voor gladde, egale oppervlakken die klaar zijn voor de volgende stap.  </li>
        <li>
          Professioneel behandelen: Kies voor een olie- of laklaag van hoge kwaliteit die uw trap beschermt en een
          nieuwe uitstraling geeft. 
        </li>
        <li>
          Stijl op maat: Of u nu gaat voor een moderne, kleurrijke look of een tijdloze, klassieke afwerking, wij zorgen
          voor een perfecte match met uw interieur. 
        </li>
        <li>Duurzaam resultaat: Onze afwerking zorgt ervoor dat uw trap jarenlang meegaat en mooi blijft.</li>
      </ul>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze terug in topconditie te brengen met een grondige
          schuur- en behandelingsbeurt!
        </BodyText>
      </div>,
    ],
  },
  {
    title: 'Lakken',
    imgSrc: '/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-3.png',
    paragraphs: [
      <div key="1">
        Voor een slijtvaste, beschermende trap is lakken een uitstekende keuze. Deze behandeling is ideaal voor
        intensief gebruikte ruimtes en biedt extra bescherming tegen vocht, perfect voor trappen in hallen, keukens en
        woonkamers. Green Team biedt daarnaast een super resistente lak die perfect is voor zwaar belaste trappen.{' '}
      </div>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een frisse nieuwe uitstraling te geven met een
          hoogwaardige lakbehandeling!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Hoe vaak moet ik mijn houten vloeren schuren en behandelen?',
    answer:
      'Houten bekleding biedt een warme uitstraling, duurzaamheid en natuurlijke isolatie. Het kan ook de waarde van een woning verhogen.',
  },
  {
    question: 'Welke behandelingen zijn beschikbaar na het schuren van mijn vloer?',
    answer: (
      <BodyText>
        U kunt de vloer laten oliën, hardwaxen of laten lakken.
        <br />
        Elk heeft zijn eigen uitstraling en eigenschappen.
      </BodyText>
    ),
  },
  {
    question: 'Kan ik zelf schuren en behandelen, of moet ik een professional inschakelen?',
    answer:
      'Wij raden aan om hier niet zelf aan te beginnen wij beschikken over alle machines en apparatuur om dit professioneel te kunnen uitvoeren.',
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
      Droomt u al langere tijd van een perfect afgewerkte trap? Bereken via de knop hieronder wat het kost en neem
      contact met ons op voor een afspraak. Als je de specialist langs laat komen gaan we bespreken wat voor soort hout
      u heeft, wat de mogelijkheden zijn, ons advies en we komen met kleurstalen zodat je zeker weten de juiste
      beslissing maakt. Deze afspraak kost eenmalig 50,- euro en deze wordt in mindering gebracht wanneer u de klus aan
      ons uitbesteed. In heel veel gevallen is deze afspraak niet nodig, en is advies via mail contact met foto’s
      voldoende.
    </BodyText>,
  ],
  imgSrc: '/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-9.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function TraprenovatieSchurenEnBehandelen() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/schuren-en-behandelen/hero.png" />
      <ListCard
        sectionName="Traprenovaties"
        pageName="Schuren en behandelen"
        listTitle="Herkenbaar?"
        listItems={[
          'Slijtage van intensief gebruik',
          'Extreem veel krasjes ',
          'Vieze vlekken in de vloer',
          'Verouderde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-1.png"
        orangeText="Geen zorgen, wij zorgen voor een complete transformatie!"
      />
      <CardsSection
        bottomText="Tijd om uw oude trap nieuw leven in te blazen?"
        title="Hoe wij uw trap vernieuwen"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken uw trap"
        btnLink="/offerte"
      />
      <TraprenovatieWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij voor u in petto?"
        description="Bekijk de resultaten van onze traprenovaties en ontdek hoe we versleten of verouderde trappen transformeren tot stijlvolle en moderne eyecatchers. Vele tevreden klanten gingen u voor, dus uw trap kan de volgende zijn!"
        btnText="Bereken uw trap"
        btnLink="/offerte"
        firstImg={'/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-4.png'}
        secondImg="/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-5.png"
        thirdImg="/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-6.png"
        fourthImg="/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-7.png"
        fifthImg="/traprenovatie/schuren-en-behandelen/schuren-en-behandelen-8.png"
      />
      <WhatWaitingForCard
        orangeText=" Ik wil dat de trappenspecialist langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <RatingSection />
    </div>
  );
}
