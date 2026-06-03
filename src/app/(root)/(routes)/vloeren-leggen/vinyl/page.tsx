import { FAQSection, FAQType } from '@/components/FAQSection';
import { FeatureListSection } from '@/components/FeatureListSection';
import { Hero } from '@/components/hero';
import { InfoHighlightSection } from '@/components/InfoHighlightSection';
import { TestimonialCarousel } from '@/components/ratingSection';
import { StoreShowcase } from '@/components/storeSection';
import { BodyText } from '@/components/theme/typography';
import { WhatWaitingForCard } from '@/components/whatWaitingForCard';
import { VloerenleggenWhyGreenTeam } from '../_components/whyGreenTeam';
import { QuestionSection } from '../../../../../components/question';
import { InfoCardProps } from '../../diensten/_components/cards';

const thirdSectionCards: InfoCardProps[] = [
  {
    title: 'Vinyl vloer - sterk, stijlvol en onderhoudsvriendelijk',
    imgSrc: '/vloeren-leggen/vinyl/vinyl-info.webp',
    paragraphs: [
      <div key="1">
        Vinyl is veel meer dan alleen een vloer; het is een praktische en stijlvolle oplossing voor iedere ruimte in
        huis. Dankzij de sterke toplaag is vinyl bestand tegen intensief dagelijks gebruik en blijft uw vloer of trap
        jarenlang mooi. Bovendien is vinyl comfortabel, geluiddempend en eenvoudig te onderhouden.
      </div>,
      <div key="2">Wat vinyl zo populair maakt :</div>,
      <ul key="3" className="flex flex-col gap-4 py-3 list-disc list-inside">
        <li>Sterk en slijtvast: Ideaal voor drukke huishoudens en ruimtes die intensief gebruikt worden.</li>
        <li>Onderhoudsvriendelijk: Vinyl is eenvoudig schoon te maken en goed bestand tegen vocht en vuil.</li>
        <li>Comfortabel en stil: Voelt prettig aan onder de voeten en werkt geluiddempend in huis.</li>
        <li>
          Verkrijgbaar in vele stijlen: Van houtlook tot moderne designs, vinyl past perfect bij iedere woonstijl.
        </li>
      </ul>,
      <p key="4" className="mb-9">
        Met vinyl kiest u voor een vloer die praktisch, duurzaam en stijlvol is.
      </p>,
      <div key="5">
        <BodyText className="font-bold text-secondaryDefault">
          Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
        </BodyText>
      </div>,
    ],
  },
];

const FAQs: FAQType[] = [
  {
    answer:
      'Ja, vinyl is een sterke en slijtvaste vloer die perfect geschikt is voor drukke huishoudens, kinderen en huisdieren.',
    question: 'Is vinyl geschikt voor intensief gebruik?',
  },
  {
    question: 'Kan vinyl op vloerverwarming gelegd worden?',
    answer:
      'Ja, vinyl is uitstekend te combineren met vloerverwarming. Het materiaal geleidt warmte goed en voelt comfortabel aan.',
  },
  {
    question: 'Hoe onderhoudsvriendelijk is vinyl?',
    answer:
      'Vinyl is eenvoudig schoon te houden met een stofzuiger of licht vochtige dweil. Hardnekkig onderhoud is meestal niet nodig.',
  },
  {
    question: 'Is vinyl waterbestendig?',
    answer:
      'Ja, vinyl is goed bestand tegen vocht en daardoor geschikt voor ruimtes zoals de keuken, hal of bijkeuken.',
  },
  {
    question: 'Moet de ondervloer geëgaliseerd worden voor vinyl?',
    answer:
      'Voor het mooiste en strakste resultaat adviseren wij meestal een egale en vlakke ondervloer voordat het vinyl gelegd wordt.',
  },
  {
    question: 'Kunnen jullie eerst langskomen voor advies?',
    answer:
      'Ja, in sommige gevallen komen wij eerst langs om de ruimte op te meten, de situatie te bekijken en passend advies te geven.',
  },
];

const whatWaitingForConfig: InfoCardProps = {
  title: 'Waar wacht u nog op!',
  paragraphs: [
    <BodyText key="1">
      Als dit is wat u zoekt, waar wacht u dan nog op? Bereken via de knop hieronder eenvoudig de kosten en neem contact
      met ons op voor een afspraak.
    </BodyText>,
    <BodyText key="2">
      Onze interieuradviseur komt graag vrijblijvend en kosteloos bij u langs met kleurstalen en materiaalvoorbeelden.
      Tijdens deze afspraak bespreken we uw trap of vloer, de verschillende mogelijkheden en geven we persoonlijk advies
      dat past bij uw woning en interieur.
    </BodyText>,
    <BodyText key="3">
      Zo kunt u het resultaat direct in uw eigen woning bekijken en met vertrouwen de juiste keuze maken.
    </BodyText>,
  ],
  imgSrc: '/vloeren-leggen/vinyl/vinyl-action.webp',
};

export default function VloerenLeggenVinylPage() {
  return (
    <div className="relative z-0 flex flex-col items-center w-full">
      <Hero imgSrc="/vloeren-leggen/vinyl/vinyl-hero.webp" />
      <FeatureListSection
        sectionName="Vloeren leggen"
        pageName="Vinyl"
        listTitle="Herkenbaar?"
        listItems={[
          'Uw vinylvloer slijt snel of raakt snel beschadigd',
          'U zoekt een sterke en onderhoudsvriendelijke vloer',
          'Uw vinylvloer voelt niet meer fris of hygiënisch',
          'Uw vloer is lastig schoon te houden',
        ]}
        imgSrc="/vloeren-leggen/vinyl/vinyl-feature.webp"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <InfoHighlightSection
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        cards={thirdSectionCards}
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
      />
      <VloerenleggenWhyGreenTeam />
      <StoreShowcase
        className="bg-secondaryLight"
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        firstImg={'/vloeren-leggen/vinyl/vinyl-gallery-1.webp'}
        secondImg="/vloeren-leggen/vinyl/vinyl-gallery-2.webp"
        thirdImg="/vloeren-leggen/vinyl/vinyl-gallery-3.webp"
        fourthImg="/vloeren-leggen/vinyl/vinyl-gallery-4.webp"
        fifthImg="/vloeren-leggen/vinyl/vinyl-gallery-5.webp"
        firstImgTopText="Vinyl"
        firstImgBottomText="Kerkstraat, Utrecht"
        secondImgTopText="Vinyl"
        secondImgBottomText="Dorpsstraat, Amersfoort"
        thirdImgTopText="Vinyl"
        thirdImgBottomText="Stationsweg, Eindhoven"
        fourthImgTopText="Vinyl"
        fourthImgBottomText="Lindelaan, Zwolle"
        fifthImgTopText="Vinyl"
        fifthImgBottomText="Coolsingel, Rotterdam"
      />
      <WhatWaitingForCard
        orangeText="Ik wil dat de parketteur langskomt!"
        {...whatWaitingForConfig}
        className="lg:py-28"
      />
      <FAQSection FAQs={FAQs} />
      <QuestionSection />
      <TestimonialCarousel />
    </div>
  );
}
