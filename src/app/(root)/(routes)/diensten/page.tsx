import React from 'react';

import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { QuestionSection } from '../../../../components/animations/question';
import { FAQSection } from './_components/faq';
import { OverigeDiensten } from './_components/Overige diensten';
import { ParaqueteRenovation } from './_components/parqueteRenovation';
import { DienstenSecondSection } from './_components/secondSection';
import { Stoffren } from './_components/stoffren';
import { Traprenovatie } from './_components/Traprenovatie';
import { Vloerenleggen } from './_components/Vloerenleggen';

function DienstenPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <DienstenSecondSection />
      <ParaqueteRenovation />
      <Traprenovatie />
      <Vloerenleggen />
      <Stoffren />
      <OverigeDiensten />
      <FAQSection />
      <QuestionSection category="Parketrenovatie" />
      <PhoneNumberSection />
    </div>
  );
}

export default DienstenPage;
