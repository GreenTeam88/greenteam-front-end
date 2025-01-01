'use client';

import React from 'react';

import { PrimaryBtnLink, SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import MultiStepForm from './calculators/common/MultiStepForm';

const QuestionsParagraph = () => {
  return (
    <div className="flex max-w-[488px] flex-col gap-11">
      <div className="flex flex-col  gap-[11px]">
        <H2 className="text-primaryDefault">Heeft u nog vragen?</H2>
        <BodyText>
          Wij begrijpen dat u graag duidelijkheid wilt voordat u een beslissing neemt. Onze experts staan klaar om al uw
          vragen te beantwoorden en u te voorzien van de informatie die u nodig heeft.
        </BodyText>
      </div>
      <div className="flex gap-2 items-center">
        <PrimaryBtnLink href="/veelgestelde-vragen">Veelgestelde vragen</PrimaryBtnLink>
        of
        <SecondaryOutlinedBtnLink href="/contact">Contact opnemen</SecondaryOutlinedBtnLink>
      </div>
    </div>
  );
};

export const QuestionSection: React.FC<{ category?: string }> = ({ category }) => {
  return (
    <div className="flex w-full flex-col lg:flex-row items-center px-2 justify-center py-5  lg:py-24 gap-[92px]">
      <MultiStepForm category={category || 'Parketrenovatie'} />
      <QuestionsParagraph />
    </div>
  );
};
