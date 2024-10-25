import React from 'react';

import { Hero } from '../_components/hero';
import { CrauselSection } from './_components/crausel';
import { FloorsOrStairs } from './_components/floorsOrStairs';
import { GreenTeamDescription } from './_components/greenTeamDescription';

function ZakelijkPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <FloorsOrStairs />
      <GreenTeamDescription />
      <CrauselSection />
    </div>
  );
}

export default ZakelijkPage;
