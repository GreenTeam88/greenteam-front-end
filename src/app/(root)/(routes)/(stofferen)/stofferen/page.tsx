import React from 'react';

import { Hero } from '../../_components/hero';
import { Reinigingsservice } from './_components/HongaarsePunt';
import { Vloer } from './_components/Laminaat-leggen';
import { Deurmat } from './_components/Linoleum-leggen';
import { Stofferen } from './_components/Parket-leggen';
import { Tapijttegels } from './_components/PVC-leggen';
import { Meubels } from './_components/Tapijt-leggen';
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
