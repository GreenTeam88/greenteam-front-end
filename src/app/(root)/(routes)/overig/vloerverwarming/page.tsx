import { InfoCardProps } from '@/components/cards';
import { CardsSection } from '@/components/cardsSection';
import { FAQSection, FAQType } from '@/components/FAQSection';
import { ListCard } from '@/components/listCard';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { StoreSection } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { WhyGreenTeam } from '../_components/whyGreenTeam';
import { Hero } from '../../_components/hero';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Vloerverwarming',
    imgSrc: '/overig/vloerverwarming/vloerverwarming-2.png',
    paragraphs: [
      <div key="1">
        Met onze professionele vloerverwarmingssystemen transformeren wij uw woning in een comfortabele, moderne
        leefruimte. Hoe wij te werk gaan:{' '}
      </div>,
      <ul key="3" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>
          Advies op maat: We bekijken je ruimte en adviseren welk systeem het beste bij uw woning en wensen past. 
        </li>
        <li>
          Efficiënte installatie: Onze experts installeren het systeem met precisie en zorgen voor een perfecte
          warmteverdeling. {' '}
        </li>
        <li>
          Geschikt voor elke ruimte: Of het nu gaat om de woonkamer, badkamer of keuken, vloerverwarming past overal en
          is compatibel met diverse vloerbedekkingen zoals tegels, PVC en parket. 
        </li>
        <li>
          Energiezuinig en comfortabel: Bespaar op uw energiekosten en geniet van warme voeten zonder storende
          radiatoren. 
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Geniet van de luxe van een gelijkmatige energiezuinige warmte in uw woning en verhoog tegelijkertijd de waarde
        en uitstraling van uw woning.{' '}
      </p>,
      <div key="5">
        <BodyText className="text-secondaryDefault font-bold">
          Wilt u ook warme warme voeten in huis? Wij maken het mogelijk.
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    question: 'Wat zijn de voordelen van vloerverwarming?',
    answer:
      'Vloerverwarming zorgt voor een gelijkmatige warmteverdeling, verhoogt het comfort en kan energiezuiniger zijn dan traditionele radiatoren.',
  },
  {
    question: 'Is vloerverwarming geschikt voor elke vloerbedekking?',
    answer:
      'Ja, maar het is belangrijk om te controleren of de gekozen vloerbedekking, zoals tegels of laminaat, geschikt is voor vloerverwarming om optimale prestaties te garanderen.',
  },
  {
    question: 'Hoeveel kost het om vloerverwarming te installeren?',
    answer:
      'De kosten variëren afhankelijk van het type systeem, de oppervlakte en de installatiemethode, maar het is meestal een investering die zich op de lange termijn terugbetaalt door energiebesparingen.',
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
      Droomt u al jaren van een comfortabele vloerverwarming in uw woning? Bereken via de knop hieronder wat het kost en
      neem contact met ons op voor een afspraak. Als u de specialist langs laat komen gaan we bespreken wat voor soort
      vloerverwarming het best bij u past en wat de mogelijkheden zijn en brengen advies uit. Deze afspraak kost
      eenmalig €50,- euro en deze wordt in mindering gebracht wanneer u de klus aan ons uitbesteed.
    </BodyText>,
  ],
  imgSrc: '/overig/vloerverwarming/vloerverwarming-8.png',
  buttonText: 'Direct Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Overig"
        pageName="Vloerverwarming"
        listTitle="Herkenbaar?"
        listItems={[
          'Koud in sommige ruimtes',
          'Verwarming werkt niet optimaal',
          'Hoge energie rekening',
          'Koude voeten in huis ',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/overig/vloerverwarming/vloerverwarming-1.png"
        orangeText="Geen zorgen, wij hebben de oplossing!"
      />
      <CardsSection
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        title="Hoe gaat het in zijn werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
      />
      <WhyGreenTeam />

      <StoreSection
        title="Warmte, comfort en luxe met vloerverwarming"
        description="Bekijk de resultaten van onze vloerverwarming en ontdek de ongeëvenaarde warmte, comfort en luxe voor jouw huis. Onze systemen zorgen voor een gelijkmatige temperatuurverdeling en zijn energiezuinig, wat bijdraagt aan een aangename sfeer. Veel tevreden klanten hebben al gekozen voor onze vloerverwarming, en u kunt de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/overig/vloerverwarming/vloerverwarming-3.png'}
        secondImg="/overig/vloerverwarming/vloerverwarming-4.png"
        thirdImg="/overig/vloerverwarming/vloerverwarming-5.png"
        fourthImg="/overig/vloerverwarming/vloerverwarming-6.png"
        fifthImg="/overig/vloerverwarming/vloerverwarming-7.png"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de specialist langs komt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />

      <RatingSection />
    </div>
  );
}
