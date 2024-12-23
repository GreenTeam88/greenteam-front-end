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
    title: 'Tapijt leggen',
    imgSrc: '/vloeren-leggen/tapijt-leggen/tapijt-leggen-2.png',
    paragraphs: [
      <div key="1">Tapijt is niet zomaar een vloer; het biedt comfort, stijl en praktische voordelen. </div>,
      <div key="10">Met tapijt kiest u voor:</div>,
      <ul key="2" className="flex flex-col py-3 list-disc gap-4 list-inside">
        <li>Warmte en zachtheid: Perfect voor koude ruimtes en heerlijk comfortabel onder uw voeten.  </li>
        <li>Geluidsisolatie: Maak uw huis stiller en rustiger met de dempende werking van tapijt.  </li>
        <li>Luchtkwaliteit: Tapijt houdt stofdeeltjes vast, wat helpt om de lucht in uw woning schoner te houden.  </li>
        <li>Decoratieve mogelijkheden: Kies uit een breed scala aan kleuren, patronen en texturen. </li>
      </ul>,
      <p key="3" className="mb-9">
        Voor een duurzame oplossing zorgen wij ervoor dat het tapijt professioneel wordt gelegd, rekening houdend met de
        ondergrond en temperatuur in de ruimte.{' '}
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
      'Ja, het is belangrijk dat de ondervloer schoon, vlak en droog is voordat het tapijt gelegd wordt om een gladde en duurzame afwerking te garanderen.',
    question: 'Moet de ondervloer voorbereid worden voordat het tapijt gelegd kan worden?',
  },
  {
    question: 'Hoelang duurt het om tapijt te leggen?',
    answer:
      'Het leggen van tapijt kan meestal binnen een dag worden voltooid, afhankelijk van de grootte van de ruimte.',
  },
  {
    question: 'Kan tapijt over een bestaande vloer worden gelegd?',
    answer:
      'Tapijt kan vaak over een andere harde vloerbedekking worden gelegd, maar tapijt over tapijt wordt afgeraden.',
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
  imgSrc: '/vloeren-leggen/tapijt-leggen/tapijt-leggen-8.png',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
};

export default function Home() {
  return (
    <div className="flex flex-col   relative z-0 items-center w-full">
      <Hero />
      <ListCard
        sectionName="Vloeren leggen"
        pageName="Tapijt"
        listTitle="Herkenbaar?"
        listItems={[
          ' Overal slijtageplekken',
          'Schade die steeds erger wordt',
          'Hardnekkige vlekken die niet verdwijnen',
          'Een gedateerde uitstraling',
        ]}
        btnLink="/offerte"
        btnText="Offerte aanvragen"
        imgSrc="/vloeren-leggen/tapijt-leggen/tapijt-leggen-1.png"
        orangeText="Herkenbaar? Geen zorgen, wij lossen het op!"
      />
      <CardsSection
        title="Hoe gaan we te werk?"
        description="Stapsgewijs naar een perfect resultaat"
        bottomText="Help, mijn oude vloer is aan vervanging toe!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        cards={thirdSectionCards}
      />
      <WhyGreenTeam />
      <StoreSection
        title="Wat hebben wij in petto? Uw vloer weer laten stralen!"
        description="Bekijk de resultaten van onze vloerenlegservice en ontdek hoe we verouderde of beschadigde vloeren omtoveren tot prachtige, moderne ruimtes. Vele tevreden klanten gingen u voor, dus uw vloer kan de volgende zijn!"
        btnText="Bereken jouw vloer"
        btnLink="/offerte"
        firstImg={'/vloeren-leggen/tapijt-leggen/tapijt-leggen-3.png'}
        secondImg="/vloeren-leggen/tapijt-leggen/tapijt-leggen-4.png"
        thirdImg="/vloeren-leggen/tapijt-leggen/tapijt-leggen-5.png"
        fourthImg="/vloeren-leggen/tapijt-leggen/tapijt-leggen-6.png"
        fifthImg="/vloeren-leggen/tapijt-leggen/tapijt-leggen-7.png"
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
