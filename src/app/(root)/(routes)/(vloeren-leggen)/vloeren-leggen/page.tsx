import React from 'react';

import { Hero } from '../../_components/hero';
import { RatingSection } from '../../_components/ratingSection';
import { QuestionSection } from '../../over-ons/_components/question';
import { Bourgogne } from './_components/Bourgogne';
import { Hexagon3D } from './_components/Hexagon-&-3D';
import { HongaarsePunt } from './_components/HongaarsePunt';
import { Laminaatleggen } from './_components/Laminaat-leggen';
import { Linoleumleggen } from './_components/Linoleum-leggen';
import { MozaïekOfPatroon } from './_components/Mozaïek-of-patroon';
import { Parketleggen } from './_components/Parket-leggen';
import { PVCleggen } from './_components/PVC-leggen';
import { PVCTegels } from './_components/PVC-Tegels';
import { Tapijtleggen } from './_components/Tapijt-leggen';
import { Tapis } from './_components/Tapis';
import { Visgraat } from './_components/Visgraat';
import { Walvisgraat } from './_components/Walvisgraat';
import { WeensePunt } from './_components/Weense-punt';

function Page() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <Parketleggen />
      <Laminaatleggen />
      <PVCleggen />
      <Tapijtleggen />
      <Linoleumleggen />
      <Visgraat />
      <Walvisgraat />
      <HongaarsePunt />
      <WeensePunt />
      <PVCTegels />

      <MozaïekOfPatroon />
      <Hexagon3D />
      <Tapis />
      <Bourgogne />
      <RatingSection />
      <QuestionSection />
    </div>
  );
}

export default Page;
