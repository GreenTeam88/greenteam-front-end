import React from 'react';

import { Hero } from '../_components/hero';
import { CollaberationsSection } from './_components/collaborations';
import { CrauselSection } from './_components/crausel';
import { FloorsOrStairs } from './_components/floorsOrStairs';
import { GreenSection } from './_components/greenSection';
import { GreenTeamDescription } from './_components/greenTeamDescription';

function ZakelijkPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <FloorsOrStairs />
      <GreenTeamDescription />
      <CrauselSection />
      <CollaberationsSection />
      <GreenSection />
    </div>
  );
}

export default ZakelijkPage;
