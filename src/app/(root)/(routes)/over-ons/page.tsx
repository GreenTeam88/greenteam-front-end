import React from 'react';

import { RatingSection } from '@/components/ratingSection';
import { Hero } from '../_components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { QuestionSection } from '../../../../components/animations/question';
import { AboutUs } from './_components/aboutUs';
import { GreenSection } from './_components/greenSection';
import { OurServicesSection } from './_components/ourServices';
import { SpecialistsSection } from './_components/specialists';
import { WhyChooseUs } from './_components/whyChooseUs';

function OverOnsHero() {
  return (
    <div className="flex px-2 lg:px-0 flex-col w-full items-center relative bg-bgColor">
      <Hero />
      <AboutUs />
      <QuestionSection category="Parketrenovatie" />
      <SpecialistsSection />
      <OurServicesSection />
      <GreenSection />
      <WhyChooseUs />
      <PhoneNumberSection />
      <RatingSection />
    </div>
  );
}

export default OverOnsHero;
