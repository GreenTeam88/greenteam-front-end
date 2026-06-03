import React from 'react';

import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import CTAButtons from './CTAButtons';
import { InfoCardProps, OrangeInfoCard } from './InfoCards';

interface InfoHighlightSectionProps {
  cards: InfoCardProps[];
  title: string;
  bottomText?: string;
  description: string;
}

export const InfoHighlightSection: React.FC<InfoHighlightSectionProps> = ({
  cards,
  title,
  bottomText,
  description,
}) => {
  return (
    <div className="flex w-full gap-10 lg:gap-[88px] py-[48px]  lg:py-[99px] px-3 lg:px-0 bg-secondaryLight flex-col items-center">
      <div className="flex flex-col gap-1 lg:gap-3 lg:items-center">
        <H2 className="text-primaryDefault">{title}</H2>
        <BodyText>{description}</BodyText>
      </div>
      <div className="flex flex-col gap-[88px]">
        {cards.map((cardConfig) => (
          <OrangeInfoCard key={cardConfig.title} {...cardConfig} className="lg:py-[0px] lg:my-0 py-0" />
        ))}
      </div>
      {bottomText && (
        <div className="flex gap-3 lg:gap-5 py-[16px] px-8 lg:py-[22^px] lg:px-[22px] lg:p-[22px] flex-col border border-black10 border-opacity-10 rounded-[10px] items-center w-full lg:w-11/12">
          <HeadlineSemibold className="text-center lg:text-start">{bottomText}</HeadlineSemibold>
          <CTAButtons />
        </div>
      )}
    </div>
  );
};
