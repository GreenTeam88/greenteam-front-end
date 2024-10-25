import React from 'react';

import { Hero } from '../_components/hero';
import { PhoneNumberSection } from '../_components/phoneNumberSection';
import { CollaberationsSection } from './_components/collaborations';
import { CoreValues } from './_components/coreValues';
import { CrauselSection } from './_components/crausel';
import { FloorsOrStairs } from './_components/floorsOrStairs';
import { GreenSection } from './_components/greenSection';
import { GreenTeamDescription } from './_components/greenTeamDescription';
import { PartnerShipSection } from './_components/partnerShip';

function ZakelijkPage() {
  return (
    <div className="flex w-full bg-bgColor items-center flex-col">
      <Hero />
      <FloorsOrStairs />
      <GreenTeamDescription />
      <CrauselSection />
      <CollaberationsSection />
      <GreenSection />
      <CoreValues />
      <PartnerShipSection />
      <PhoneNumberSection />
    </div>
  );
}

export default ZakelijkPage;
