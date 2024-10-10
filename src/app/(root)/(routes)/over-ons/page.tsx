import React from 'react';

import { Hero } from '../_components/hero';
import { AboutUs } from './_components/aboutUs';
import { QuestionSection } from './_components/question';
import { SpecialistsSection } from './_components/specialists';

function OverOnsHero() {
  return (
    <div className="flex flex-col bg-bgColor">
      <Hero />
      <AboutUs />
      <QuestionSection />
      <SpecialistsSection></SpecialistsSection>
    </div>
  );
}

export default OverOnsHero;
