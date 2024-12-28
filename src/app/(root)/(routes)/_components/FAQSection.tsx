'use client';

import Link from 'next/link';
import { useState } from 'react';

import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, BodyTextSemibold, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

interface FAQType {
  question: string;
  answer: string | JSX.Element;
}

const FAQs: FAQType[] = [
  {
    answer:
      'Wij werken met meerdere teams en specialisten, waardoor we niet beperkt zijn tot één locatie of provincie. We zijn actief in heel Nederland en voeren, in uitzonderlijke gevallen, ook opdrachten uit in België en op de Waddeneilanden.',
    question: 'Werken jullie door heel Nederland?',
  },
  {
    question: 'Hoe kan ik bij jullie betalen?',
    answer:
      'Er zijn verschillende betaalmogelijkheden beschikbaar. Na afronding van de werkzaamheden ontvangt u altijd een factuur met de gebruikelijke online betaalopties. Daarnaast kunt u ook eenvoudig een bankoverschrijving doen of, indien gewenst, contant betalen.',
  },
  {
    question: 'Hoelang duurt een renovatie?',
    answer:
      'De duur van een renovatie hangt sterk af van de omvang van het project. Zo kan de renovatie van één trap doorgaans binnen één dag worden afgerond, terwijl drie trappen waarschijnlijk twee dagen in beslag zullen nemen.',
  },
  {
    question: 'Kunnen jullie eerst langskomen?',
    answer:
      'In bepaalde gevallen komen we graag eerst bij u langs. Bijvoorbeeld wanneer u een tapijt voor uw trap wilt uitkiezen, of wanneer we stalen moeten laten zien en de ruimte moeten opmeten, is een bezoek ter plaatse noodzakelijk.',
  },
  {
    question: 'Welke voorbereidingen moet ik treffen?',
    answer:
      'Voor aanvang van de werkzaamheden vragen wij u altijd de te behandelen oppervlakken leeg en schoon te maken, zodat onze specialisten direct aan de slag kunnen. Bij een parketrenovatie betekent dit dat de gehele vloer vrij moet zijn.',
  },
  {
    question: 'Is er een aanbetaling nodig voor jullie aan de slag gaan?',
    answer:
      'Een aanbetaling is bij ons alleen vereist wanneer er veel materiaal moet worden geleverd, zoals bij grote oppervlakten vloer- of tegelwerk. Dit heeft te maken met de aanschaf van producten bij onze groothandels en leveranciers.',
  },
  {
    question: 'Wat zijn de garantievoorwaarden?',
    answer: (
      <>
        Per categorie gelden andere garantievoorwaarden. Onze garantie voorwaarden zijn te vinden in onze{' '}
        <Link href="/algemene-voorwaarden" className="hover:text-primaryDefault">
          algemene voorwaarden.
        </Link>
      </>
    ),
  },
];

const FAQCard: React.FC<FAQType> = ({ answer, question }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      onClick={() => setIsOpened((currValue) => !currValue)}
      className={cn(
        'flex cursor-pointer lg:w-[693px] flex-col px-5  rounded-lg border border-black20 border-opacity-20 py-[11px] gap-[11px]',
        { 'border-primaryDefault border-opacity-100 text-primaryDefault ': isOpened }
      )}
    >
      <div className="w-full flex justify-between">
        <BodyTextSemibold>{question}</BodyTextSemibold>
        <img src={isOpened ? '/icons/greenDropDownArrow.svg' : '/icons/blackDropDownArrow.svg'} />
      </div>
      {isOpened && <BodyText className="text-black">{answer}</BodyText>}
    </div>
  );
};

const ParagraphSection = () => {
  return (
    <div className="flex flex-col gap-[44px] lg:w-[488px]">
      <div className="flex flex-col gap-[11px]">
        <H2 className="text-primaryDefault ">Veelgestelde vragen</H2>
        <p>
          Heb je vragen? Wij hebben de antwoorden! Staat je vraag er niet tussen? Neem dan even contact met ons op en we
          helpen je graag verder.
        </p>
      </div>
      <div className="flex gap-[22px]">
        <PrimaryBtnLink href="/veelgestelde-vragen">Alles bekijken</PrimaryBtnLink>
        <SecondaryOutlinedBtnLink href="/contact">Contact opnemen</SecondaryOutlinedBtnLink>
      </div>
    </div>
  );
};

const AllQuestions = () => {
  return (
    <div className="flex  flex-col gap-[11px] ">
      {FAQs.map((FAQ) => (
        <FAQCard key={FAQ.question} {...FAQ} />
      ))}
    </div>
  );
};
export const FAQSection = () => {
  return (
    <div className="flex px-4 py-[88px] w-full items-center flex-col lg:flex-row justify-center gap-7 bg-secondaryLight">
      {/* the paragraph section includes the title , the paragraph and the buttons */}
      <ParagraphSection />
      {/* the AllQuestions component includes all the faq in a list */}
      <AllQuestions />
    </div>
  );
};
