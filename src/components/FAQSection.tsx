'use client';

import React, { useState } from 'react';

import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, BodyTextBold, BodyTextSemibold, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

export interface FAQType {
  question: string;
  answer: string | JSX.Element;
}

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
      {isOpened && (React.isValidElement(answer) ? <>{answer}</> : <BodyText>{answer}</BodyText>)}
    </div>
  );
};

const ParagraphSection = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-[44px] lg:w-[488px]">
      <div className="flex flex-col gap-[11px]">
        <H2 className="text-primaryDefault">Vragen over deze dienst?</H2>
        <p>
          Wij hebben de antwoorden! Staat je vraag er niet tussen? Neem dan even contact met ons op en we helpen je
          graag verder.{' '}
        </p>
      </div>
      <div className="flex flex-col gap-2  lg:gap-[22px] ">
        <BodyTextBold className="text-secondaryDefault">Geen vraag is te gek.</BodyTextBold>
        <div className="flex gap-1  lg:gap-[22px] items-center flex-col lg:flex-row">
          <PrimaryBtnLink className="w-full lg:w-fit" href="/veelgestelde-vragen">
            Veelgestelde vragen
          </PrimaryBtnLink>
          <BodyText>of</BodyText>
          <SecondaryOutlinedBtnLink className="w-full lg:w-fit" href="/contact">
            Contact opnemen
          </SecondaryOutlinedBtnLink>
        </div>
      </div>
    </div>
  );
};

const AllQuestions: React.FC<{ FAQs: FAQType[] }> = ({ FAQs }) => {
  return (
    <div className="flex  flex-col gap-[11px] ">
      {FAQs.map((FAQ) => (
        <FAQCard key={FAQ.question} {...FAQ} />
      ))}
    </div>
  );
};
export const FAQSection: React.FC<{ FAQs: FAQType[] }> = ({ FAQs }) => {
  return (
    <div className="flex px-4 py-[44px] lg:py-[88px] w-full items-center flex-col lg:flex-row justify-center gap-7 bg-secondaryLight">
      {/* the paragraph  section includes the title , the paragraph and the buttons */}
      <ParagraphSection />
      {/* the AllQuestions component includes all the faq in a list */}
      <AllQuestions FAQs={FAQs} />
    </div>
  );
};
