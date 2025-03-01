import React from 'react';

import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const greenTeamDescriptionInfo: InfoCardProps = {
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
  imgSrc: '/zakelijk/beautiful-shot-modern-house-staircase.png',
  title:
    'Green Team is al meer dan 20 jaar specialist in het leggen en renoveren van parketvloeren in verschillende bedrijfstakken.',
  paragraphs: [
    <>
      Green Team zal bij elk project zo duurzaam en groen mogelijk te werk gaan. Bewust bezig zijn met een betere
      wereld, dat vinden we belangrijk. Het is tegenwoordig zelfs voor grote bedrijven belangrijk om steeds meer
      duurzamere keuzes te gaan maken. Wij dragen graag bij aan een zo duurzaam mogelijke visie van uw bedrijf. Niet
      alleen omdat bedrijven steeds vaker kiezen voor een groene optie, maar ook omdat consumenten een steeds
      duidelijkere voorkeur hebben voor duurzame producten en werkwijzen.
    </>,
    <>
      {' '}
      <span className="text-secondaryDefault font-bold">
        Wij bieden oplossingen voor kantoren, hotels, winkels, spa’s en meer.
      </span>
    </>,
  ],
};

export function GreenTeamDescription() {
  return <OrangeInfoCard {...greenTeamDescriptionInfo} className="lg:flex-row-reverse" />;
}
