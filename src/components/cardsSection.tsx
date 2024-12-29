import React from 'react';

import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from './cards';

export const CardsSection: React.FC<{
  cards: InfoCardProps[];
  title: string;
  btnLink?: string;
  bottomText?: string;
  description: string;
  btnText?: string;
}> = ({ cards, title, bottomText, btnText, description, btnLink }) => {
  return (
    <div className="flex w-full gap-10 lg:gap-[88px] py-[48px]  lg:py-[99px] px-3 lg:px-0 bg-secondaryLight flex-col items-center">
      <div className="flex gap-1 lg:gap-3 flex-col lg:items-center">
        <H2 className="text-primaryDefault">{title}</H2>
        <BodyText>{description}</BodyText>
      </div>
      <div className="flex flex-col  gap-[88px]">
        {cards.map((cardConfig) => (
          <OrangeInfoCard
            key={cardConfig.title}
            {...cardConfig}
            className="lg:py-[0px] lg:my-0 py-0 h-fit flex items-center  "
          />
        ))}
      </div>
      {bottomText && (
        <div className="flex gap-5 p-[22px] flex-col lg:flex-row border border-black10 border-opacity-10 rounded-[10px] items-center">
          <HeadlineSemibold className="text-center lg:text-start">{bottomText}</HeadlineSemibold>
          <PrimaryBtnLink href={btnLink || '/'}>{btnText}</PrimaryBtnLink>
        </div>
      )}
    </div>
  );
};
