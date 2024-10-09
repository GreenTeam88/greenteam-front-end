'use client';

import { useState } from 'react';

import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, BodyTextSemibold, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

interface FAQType {
  question: string;
  answer: string;
}

const FAQs: FAQType[] = [
  {
    answer:
      'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
    question: 'Wat is het verschil tussen lak, hardwax en olie?',
  },
  {
    question: 'Wat is het verschil tussen lak, hardwax en olie?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
  },
  {
    question: 'Wat is het verschil tussen lak, hardwax en olie?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
  },
  {
    question: 'Wat is het verschil tussen lak, hardwax en olie?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Cursus eu blandit id egestas elementum. Amet tellus dignissim at in tincidunt tortor. Placerat cursus eu blandit id egestas.',
  },
  {
    question: 'Wat is het verschil tussen lak, hardwax en olie?',
    answer: '',
  },
];

const FAQCard: React.FC<FAQType> = ({ answer, question }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      onClick={() => setIsOpened((currValue) => !currValue)}
      className={cn(
        'flex cursor-pointer lg:w-[693px] flex-col px-5 rounded-lg border border-black20 border-opacity-20 py-[11px] gap-[11px]',
        { 'border-primaryDefault border-opacity-100': isOpened }
      )}
    >
      <div className="w-full flex justify-between">
        <BodyTextSemibold>{question}</BodyTextSemibold>
        <img src={isOpened ? '/icons/greenDropDownArrow.svg' : '/icons/blackDropDownArrow.svg'} />
      </div>
      {isOpened && <BodyText>{answer}</BodyText>}
    </div>
  );
};

const ParagraphSection = () => {
  return (
    <div className="flex flex-col gap-[44px] lg:w-[488px]">
      <div className="flex flex-col gap-[11px]">
        <H2 className="text-primaryDefault">Veelgestelde vragen</H2>
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
    <div className="flex px-4 py-[88px] w-full items-center flex-col lg:flex-row justify-center gap-7">
      {/* the paragraph section includes the title , the paragraph and the buttons */}
      <ParagraphSection />
      {/* the AllQuestions component includes all the faq in a list */}
      <AllQuestions />
    </div>
  );
};
