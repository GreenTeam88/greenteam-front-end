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
    title: 'PVC Tegels',
    imgSrc: '/vloeren-leggen/tegel/tegel-2.png',
    paragraphs: [
      <div key="1">
        Met tegels geeft u uw woonkamer een stijlvolle, frisse uitstraling. Of u nu kiest voor natuursteen of keramische
        tegels, ze brengen direct een gevoel van luxe en duurzaamheid in uw woning.{' '}
      </div>,
      <div key="2">
        <div> Waarom tegels de ideale keuze zijn:</div>
        <ul key="3" className="flex flex-col pb-3  list-disc gap-4 list-inside">
          <li>Natuursteen: Gepolijste natuurstenen tegels zijn slijtvast en perfect voor een elegante look.  </li>
          <li>
            Keramische tegels: Kies voor grestegels, een duurzame optie die lang meegaat en ideaal is voor dagelijks
            gebruik. {' '}
          </li>
          <li>Praktisch en veelzijdig: Tegels zijn eenvoudig schoon te houden en passen bij elke interieurstijl. </li>
        </ul>
      </div>,
      <p key="4" className="mb-9">
        Laat uw vloer spreken met de tijdloze schoonheid van tegels!{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault">
          Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'PVC tegels zijn waterbestendig, gemakkelijk te onderhouden en beschikbaar in diverse stijlen en kleuren, waardoor ze een veelzijdige keuze zijn voor verschillende ruimtes.',
    question: 'Wat zijn de voordelen van PVC tegels ten opzichte van traditionele vloerbedekkingen?',
  },
  {
    question: 'Hoe worden PVC tegels gelegd en moet ik hiervoor een professional inhuren?',
    answer:
      'PVC tegels kunnen worden gelijmd of met een click-systeem gelegd. Voor de beste resultaten is het aan te raden om een professional in te schakelen, vooral voor grotere oppervlakken.',
  },
  {
    question: 'Kunnen PVC tegels op een bestaande vloer worden gelegd?',
    answer:
      'Ja, PVC tegels kunnen meestal over bestaande vloeren worden gelegd, mits de ondergrond vlak en schoon is. Het is belangrijk om eventuele oneffenheden voor te behandelen.',
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
  imgSrc: '/vloeren-leggen/tegel/tegel-8.png',
  buttonText: 'Direct offerte berekenen',
  buttonLink: '/offerte-aanvragen',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="PVC Tegels"
        listTitle="Heeft u één van deze vloeren?"
        listItems={[
          ' PVC in visgraatmotief, maar het mist karakter',
          ' Laminaat met rechte planken dat eentonig oogt',
          'Parket met zichtbare krassen en slijtage',
        ]}
        btnLink="/offerte-aanvragen"
        btnText="Offerte berekenen"
        imgSrc="/vloeren-leggen/tegel/tegel-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        btnLink="/offerte-aanvragen"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
      />
      <WhyGreenTeam />
      <StoreSection
        btnLink="/offerte-aanvragen"
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        firstImg={'/vloeren-leggen/tegel/tegel-3.jpg'}
        secondImg="/vloeren-leggen/tegel/tegel-4.png"
        thirdImg="/vloeren-leggen/tegel/tegel-5.png"
        fourthImg="/vloeren-leggen/tegel/tegel-6.png"
        fifthImg="/vloeren-leggen/tegel/tegel-7.png"
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
