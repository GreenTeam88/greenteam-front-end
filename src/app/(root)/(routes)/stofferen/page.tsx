import React from 'react';

import { Hero } from '@/components/hero';
import { Deurmat } from './_components/deurmat';
import { Droogloopmat } from './_components/droogloopmat';
import { Meubels } from './_components/meubels';
import { Reinigingsservice } from './_components/Reinigingsservice';
import { Rodeloper } from './_components/rodeloper';
import { Stofferen } from './_components/stofferen';
import { TapijtVerwijderen } from './_components/tapijt-verwijderen';
import { Tapijttegels } from './_components/Tapijttegels';
import { Vloer } from './_components/vloer';

function Page() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/stofferen/hero.png" />
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
