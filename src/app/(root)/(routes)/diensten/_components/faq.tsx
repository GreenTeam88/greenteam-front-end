'use client';

import { useState } from 'react';

import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
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

  {
    question: 'Just a closed example',
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
        <BodyTextSemibold className={cn({ 'text-primaryDefault': isOpened })}>{question}</BodyTextSemibold>
        <img src={isOpened ? '/icons/greenDropDownArrow.svg' : '/icons/blackDropDownArrow.svg'} />
      </div>
      {isOpened && <BodyText>{answer}</BodyText>}
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
    <div className="flex px-4 py-[88px w-full items-center flex-col gap-[55px] justify-center py-36">
      <div className="flex items-center flex-col gap-3">
        <H2 className="text-primaryDefault text-center">Veelgestelde vragen</H2>
        <BodyText className="text-center">
          We hebben een breed scala aan vragen en wij hebben de antwoorden op een rijtje gezet!
        </BodyText>
      </div>
      {/* the AllQuestions component includes all the faq in a list */}
      <AllQuestions />
      <SecondaryOutlinedBtn>Alles bekijken</SecondaryOutlinedBtn>
    </div>
  );
};
