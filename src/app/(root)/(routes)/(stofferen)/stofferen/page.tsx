import React from 'react';

import { Hero } from '../../_components/hero';
import { RatingSection } from '../../_components/ratingSection';
import { QuestionSection } from '../../over-ons/_components/question';
import { Bourgogne } from './_components/Bourgogne';
import { Hexagon3D } from './_components/Hexagon-&-3D';
import { Reinigingsservice } from './_components/HongaarsePunt';
import { Vloer } from './_components/Laminaat-leggen';
import { Deurmat } from './_components/Linoleum-leggen';
import { MozaïekOfPatroon } from './_components/Mozaïek-of-patroon';
import { Stofferen } from './_components/Parket-leggen';
import { Tapijttegels } from './_components/PVC-leggen';
import { PVCTegels } from './_components/PVC-Tegels';
import { Meubels } from './_components/Tapijt-leggen';
import { Tapis } from './_components/Tapis';
import { Droogloopmat } from './_components/Visgraat';
import { Rodeloper } from './_components/Walvisgraat';
import { TapijtVerwijderen } from './_components/Weense-punt';

function Page() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero />
      <Stofferen />
      <Vloer />
      <Tapijttegels />
      <Meubels />
      <Deurmat />
      <Droogloopmat />
      <Rodeloper />
      <Reinigingsservice />
      <TapijtVerwijderen />
    </div>
  );
}

export default Page;
