import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { ListCard } from '../_components/listCard';
import { WhatWaitingForCard } from '../_components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';
import { QuestionSection } from '../../../../../components/animations/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Parket leggen',
    imgSrc: '/vloeren-leggen/parket-leggen/parket-leggen-2.png',
    paragraphs: [
      <div key="1">
        Een parketvloer komt pas echt tot zijn recht als deze vakkundig wordt gelegd. Bij Green Team zorgen we ervoor
        dat uw vloer perfect wordt geplaatst, met oog voor:{' '}
      </div>,
      <ul key="2" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Details en maatwerk: Elk detail wordt nauwkeurig afgestemd op uw ruimte en wensen. </li>
        <li>Ervaring en expertise: Onze ervaren parketteurs leggen de vloeren met precisie en vakmanschap. </li>
        <li>
          Advies op maat: We begeleiden u bij het kiezen van de juiste parketvloer die past bij uw stijl en behoeften. 
        </li>
      </ul>,
      <p key="3" className="mb-9">
        Alle parketvloeren die wij leveren, zijn afkomstig uit duurzame bronnen en voorzien van PEFC- en/of
        FSC-keurmerken. Dit betekent dat u niet alles kiest voor kwaliteit, maar ook voor een milieuvriendelijke en
        verantwoorde optie. 
      </p>,
      <div key="4">
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
      'De duur van het leggen van parket hangt af van de grootte van de ruimte en het patroon. Gemiddeld kan het 1 tot 3 dagen duren, inclusief voorbereidingen zoals egaliseren.',
    question: 'Hoelang duurt het om een parketvloer te leggen?',
  },
  {
    question: 'Is parket geschikt voor vloerverwarming?',
    answer:
      'Ja, veel soorten parket zijn geschikt voor vloerverwarming, maar het is belangrijk om een deskundige te raadplegen om het juiste type hout en installatie te kiezen.',
  },
  {
    question: 'Hoe onderhoud ik mijn parketvloer na installatie?',
    answer:
      'Regelmatig stofzuigen en dweilen met een licht vochtige doek is voldoende. Voor langdurig onderhoud wordt aangeraden om de vloer jaarlijks te oliën of te lakken.',
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
  imgSrc: '/vloeren-leggen/parket-leggen/parket-leggen-8.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Parket"
        listTitle="Weet jij niet…"
        listItems={[
          'Hoe u een parketvloer professioneel legt?',
          'Welke parketvloer het beste past bij uw ruimte?',
          'Of parket gecombineerd kan worden met vloerverwarming?',
        ]}
        btnLink="/offerte"
        btnText="Offerte berekenen"
        imgSrc="/vloeren-leggen/parket-leggen/parket-leggen-1.png"
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
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/parket-leggen/parket-leggen-3.png'}
        secondImg="/vloeren-leggen/parket-leggen/parket-leggen-4.png"
        thirdImg="/vloeren-leggen/parket-leggen/parket-leggen-5.png"
        fourthImg="/vloeren-leggen/parket-leggen/parket-leggen-6.png"
        fifthImg="/vloeren-leggen/parket-leggen/parket-leggen-7.png"
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
