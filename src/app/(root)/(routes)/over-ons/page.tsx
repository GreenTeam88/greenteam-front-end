import React from 'react';

import { Hero } from '../_components/hero';
import { AboutUs } from './_components/aboutUs';
import { QuestionSection } from './_components/question';

function OverOnsHero() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <QuestionSection />
    </div>
  );
}

export default OverOnsHero;
