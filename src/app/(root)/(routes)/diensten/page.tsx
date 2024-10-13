import React from 'react';

import { Hero } from '../_components/hero';
import { ParaqueteRenovation } from './_components/parqueteRenovation';
import { DienstenSecondSection } from './_components/secondSection';

function DienstenPage() {
  return (
    <div className="flex w-full items-center flex-col">
      <Hero />
      <DienstenSecondSection />
      <ParaqueteRenovation />
    </div>
  );
}

export default DienstenPage;
