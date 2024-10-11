import React from 'react';

import { Hero } from '../_components/hero';
import { AboutUs } from './_components/aboutUs';
import { OurServicesSection } from './_components/ourServices';
import { QuestionSection } from './_components/question';
import { SpecialistsSection } from './_components/specialists';

function OverOnsHero() {
  return (
    <div className="flex flex-col w-full items-center bg-bgColor">
      <Hero />
      <AboutUs />
      <QuestionSection />
      <SpecialistsSection />
      <OurServicesSection />
    </div>
  );
}

export default OverOnsHero;
