import React from 'react';

import { Hero } from '@/components/hero';
import { RatingSection } from '@/components/ratingSection';
import { QuestionSection } from '../../../../components/question';
import { Bourgogne } from './_components/mainPage/Bourgogne';
import { Hexagon3D } from './_components/mainPage/Hexagon-&-3D';
import { HongaarsePunt } from './_components/mainPage/HongaarsePunt';
import { Laminaatleggen } from './_components/mainPage/Laminaat-leggen';
import { Linoleumleggen } from './_components/mainPage/Linoleum-leggen';
import { MozaïekOfPatroon } from './_components/mainPage/Mozaïek-of-patroon';
import { Vloerenleggen } from './_components/mainPage/Parket-leggen';
import { PVCleggen } from './_components/mainPage/PVC-leggen';
import { PVCTegels } from './_components/mainPage/PVC-Tegels';
import { Tapijtleggen } from './_components/mainPage/Tapijt-leggen';
import { Tapis } from './_components/mainPage/Tapis';
import { Visgraat } from './_components/mainPage/Visgraat';
import { Walvisgraat } from './_components/mainPage/Walvisgraat';
import { WeensePunt } from './_components/mainPage/Weense-punt';

function Page() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/vloeren-leggen/hero.png" />
      <Vloerenleggen />
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
      <QuestionSection category="Parketrenovatie" />
    </div>
  );
}

export default Page;
