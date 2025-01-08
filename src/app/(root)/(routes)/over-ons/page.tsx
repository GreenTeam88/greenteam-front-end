import React from 'react';

import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
// import { Hero } from '../_components/hero';
import { AboutUs } from './_components/aboutUs';
import { GreenSection } from './_components/greenSection';
import { OurServicesSection } from './_components/ourServices';
import { SpecialistsSection } from './_components/specialists';
import { WhyChooseUs } from './_components/whyChooseUs';

function OverOnsPage() {
  return (
    <div className="flex  lg:px-0 flex-col w-full items-center relative bg-bgColor">
      <Hero />
      <AboutUs />
      <QuestionSection />
      <SpecialistsSection />
      <OurServicesSection />
      <GreenSection />
      <WhyChooseUs />
      <PhoneNumberSection />
      <RatingSection />
    </div>
  );
}

export default OverOnsPage;
