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
    title: 'Linoleum - duurzaam, hygiënisch en stijlvol',
    imgSrc: '/vloeren-leggen/linoleum-leggen/linoleum-leggen-2.png',
    paragraphs: [
      <div key="1">
        Linoleum is veel meer dan alleen een voer; het is een slimme investering in duurzaamheid, comfort en gezondheid.
        Dit natuurproduct bestaat voor 97% uit natuurlijke grondstoffen zoals kalksteen, lijnzaadolie, hars en jute,
        waarvan maar liefst 72% recyclebaar is.{' '}
      </div>,
      <div key="2">Wat linoleum zo bijzonder maakt: </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Duurzaam en milieuvriendelijk: Een groen alternatief dat lang meegaat en de impact op het milieu vermindert. 
        </li>
        <li>
          Hygiënisch en allergievriendelijk: Perfect voor mensen met allergieën of ademhalingsproblemen, dankzij het
          stofafstotende en gemakkelijk schoon te maken oppervlak.  
        </li>
        <li>Comfortabel: Zacht veerkrachtig en prettig om op te lopen, terwijl het toch slijtvast is.  </li>
        <li>
          Esthetisch veelzijdig: Beschikbaar in verschillende kleuren en designs om perefect in uw interieur te passen. {' '}
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met linoleum haalt u een vloer in huis die praktisch, stijlvol en toekomstbestendig is.
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
      'Ja, de ondervloer moet vlak, schoon en droog zijn om een goede hechting en een strak resultaat te garanderen. We raden aan om de ondervloer te laten egaliseren voor het beste resultaat.',
    question: 'Is de ondervloer belangrijk bij het leggen van linoleum?',
  },
  {
    question: 'Hoe onderhoudsvriendelijk is linoleum?',
    answer:
      'Linoleum is duurzaam en eenvoudig te onderhouden, het kan regelmatig worden schoongemaakt met een vochtige dweil.',
  },
  {
    question: 'Kan linoleum op vloerverwarming gelegd worden?',
    answer:
      'Ja, linoleum is geschikt voor gebruik met vloerverwarming, mits deze gelijkmatig verdeeld wordt en niet te warm wordt.',
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
  imgSrc: '/vloeren-leggen/linoleum-leggen/linoleum-leggen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Linoleum"
        listTitle="Herkenbaar?"
        listItems={[
          'Uw vloer slijt snel en gaat niet lang mee',
          'U zoekt een milieuvriendelijk alternatief',
          'Uw vloer is niet hygiënisch.',
          'Uw vloer is niet makkelijk schoon te maken',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/linoleum-leggen/linoleum-leggen-1.png"
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
      <VloerenleggenWhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/linoleum-leggen/linoleum-leggen-3.png'}
        secondImg="/vloeren-leggen/linoleum-leggen/linoleum-leggen-4.png"
        thirdImg="/vloeren-leggen/linoleum-leggen/linoleum-leggen-5.png"
        fourthImg="/vloeren-leggen/linoleum-leggen/linoleum-leggen-6.png"
        fifthImg="/vloeren-leggen/linoleum-leggen/linoleum-leggen-7.png"
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
