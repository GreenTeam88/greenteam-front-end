import React from 'react';

import { Hero } from '../_components/hero';
import { AboutUs } from './_components/aboutUs';

function OverOnsHero() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
    </div>
  );
}

export default OverOnsHero;
