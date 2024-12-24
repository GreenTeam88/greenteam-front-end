'use client';

import Link from 'next/link';
import { useState } from 'react';

import { PrimaryBtn, SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, HeadlineSemibold } from '@/components/theme/typography';

export const TermsConditionPageQuestion = () => {
  const [infoUsefull, setInfoUsefull] = useState<boolean | null>(null);
  return (
    <div className="flex flex-col items-center gap-[22px] py-[55px] bg-lightOrange w-full">
      <HeadlineSemibold className="text-primaryDefault">Hebben we je probleem kunnen oplossen?</HeadlineSemibold>
      <div className="flex gap-[22px]">
        <PrimaryBtn onClick={() => setInfoUsefull(true)}>Ja, het was nuttig voor mij</PrimaryBtn>
        <SecondaryOutlinedBtn onClick={() => setInfoUsefull(false)}>
          Nee, het was niet nuttig voor mij
        </SecondaryOutlinedBtn>
      </div>
      {infoUsefull !== null &&
        (infoUsefull ? (
          <BodyText>We zijn blij dat we je hebben kunnen helpen!</BodyText>
        ) : (
          <BodyText>
            Neem alstublieft <Link href="/contact">contact</Link> met ons op om het probleem te bespreken.
          </BodyText>
        ))}
    </div>
  );
};
