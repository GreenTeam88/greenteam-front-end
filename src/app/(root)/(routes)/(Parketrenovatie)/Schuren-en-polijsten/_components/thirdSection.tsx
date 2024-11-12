import React from 'react';

import { PrimaryBtn } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

export const ThirdSection: React.FC<{ cards: InfoCardProps[] }> = ({ cards }) => {
  return (
    <div className="flex w-full gap-[88px] py-[99px] px-3 lg:px-0 bg-secondaryLight flex-col items-center">
      <div className="flex gap-3 flex-col items-center">
        <H2 className="text-primaryDefault">Hoe gaat schuren en polijsten in zijn werk?</H2>
        <BodyText>Stapsgewijs naar een perfect resultaat</BodyText>
      </div>
      <div className="flex flex-col gap-[88px]">
        {cards.map((cardConfig) => (
          <OrangeInfoCard key={cardConfig.title} className="lg:py-[0px] lg:my-0  " {...cardConfig} />
        ))}
      </div>
      <div className="flex gap-5 p-[22px] border border-black10 border-opacity-10 rounded-[10px] items-center">
        <HeadlineSemibold>Help, mijn oude vloer is aan vervanging toe!</HeadlineSemibold>
        <PrimaryBtn>Bereken jouw vloer</PrimaryBtn>
      </div>
    </div>
  );
};
