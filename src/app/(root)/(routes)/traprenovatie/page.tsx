import React from 'react';

import { Hero } from '@/components/hero';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { BekledenHout } from './_components/bekleden-hout';
import { BekledenLaminaat } from './_components/bekleden-met-laminaat';
import { BekledenLinoleum } from './_components/bekleden-met-linoleum';
import { BekledenTapijt } from './_components/bekleden-tapijt';
import { BetonAcoustic } from './_components/beton-ciré-acoustic';
import { BetonBrut } from './_components/beton-ciré-brut';
import { BetonCroco } from './_components/beton-ciré-croco';
import { BetonGlamour } from './_components/beton-ciré-glamour-stuc';
import { BetonMetal } from './_components/beton-ciré-metal-stuc';
import { BetonParel } from './_components/beton-ciré-parel';
import { BetonVenetiaans } from './_components/beton-ciré-venetiaans';
import { DichteTrap } from './_components/dichte-trap';
import { OpenTrap } from './_components/open-trap';
import { SchurenBehandelen } from './_components/schuren-behandelen';
import { SchurenSchilderen } from './_components/schuren-schilderen';
import { Traprenovaties } from './_components/traprenovaties';
import { Verlichting } from './_components/verlichting';

function TraprenovatiesPage() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/traprenovatie/hero.png" />
      <Traprenovaties />
      <BekledenLaminaat />
      <BekledenHout />
      <BekledenTapijt />
      <BekledenLinoleum />
      <SchurenBehandelen />
      <SchurenSchilderen />
      <BetonMetal />
      <BetonGlamour />
      <BetonBrut />
      <BetonParel />
      <BetonCroco />
      <BetonVenetiaans />
      <BetonAcoustic />
      <OpenTrap />
      <DichteTrap />
      <Verlichting />
      <RatingSection />
      <QuestionSection />
    </div>
  );
}

export default TraprenovatiesPage;
