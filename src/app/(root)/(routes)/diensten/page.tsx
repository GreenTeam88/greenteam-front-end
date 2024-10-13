import React from 'react';

import { Hero } from '../_components/hero';
import { ParaqueteRenovation } from './_components/parqueteRenovation';
import { DienstenSecondSection } from './_components/secondSection';
import { Stoffren } from './_components/stoffren';

function DienstenPage() {
  return (
    <div className="flex w-full items-center flex-col">
      <Hero />
      <DienstenSecondSection />
      <ParaqueteRenovation />
      <Stoffren />
    </div>
  );
}

export default DienstenPage;
