import React from 'react';

import { Hero } from '@/components/hero';
import { QuestionSection } from '@/components/question';
import { RatingSection } from '@/components/ratingSection';
import { Egaliseren } from './_components/egaliseren';
import { Gietvloeren } from './_components/gietvloeren';
import { NatuursteenBehandelen } from './_components/natuursteen-behandelen';
import { Opslag } from './_components/opslag';
import { Overig } from './_components/overig';
import { Tegelen } from './_components/tegelen';
import { VloerVerwijderen } from './_components/vloer-verwijderen';

function OverigPage() {
  return (
    <div className="flex flex-col  relative z-0 items-center w-full">
      <Hero imgSrc="/overig/hero.png" />
      <Overig />
      <Egaliseren />
      <Gietvloeren />
      <Tegelen />
      <VloerVerwijderen />
      <NatuursteenBehandelen />
      <Opslag />
      <RatingSection />
      <QuestionSection />
    </div>
  );
}

export default OverigPage;
