import React from 'react';

import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const greenTeamDescriptionInfo: InfoCardProps = {
  buttonText: 'Offerte aanvragen',
  imgSrc: '/zakelijk/beautiful-shot-modern-house-staircase.png',
  title:
    'Green Team is al meer dan 20 jaar specialist in het leggen en renoveren van parketvloeren in verschillende bedrijfstakken.',
  paragraphs: [
    <>
      Op zoek naar de mogelijkheden voor een houten vloer in een bedrijfsruimte, kantoorpand, hotel, winkel, spa of
      sportzaal? Green Team is een betrouwbare en geschikte partner voor jouw zakelijke project. Hierbij zorgen we niet
      alleen voor een correcte levering en plaatsing of renovatie van de vloer, we geven ook advies voor de beste vloer
      voor jouw bedrijfsruimte en zorgen uiteraard voor een vakkundige afwerking van de vloer.
    </>,
    <>
      Green Team zal bij elk project zo duurzaam en groen mogelijk te werk gaan. Bewust bezig zijn met een betere
      wereld, dat vinden we belangrijk. Het is tegenwoordig zelfs voor grote bedrijven belangrijk om steeds meer
      duurzamere keuzes te gaan maken. Wij dragen graag bij aan een zo duurzaam mogelijke visie van jouw bedrijf. Niet
      alleen omdat bedrijven steeds vaker kiezen voor een groene optie, maar ook omdat consumenten een steeds
      duidelijkere voorkeur hebben voor duurzame producten en werkwijzen.Green Team zal bij elk project zo duurzaam en
      groen mogelijk te werk gaan. Bewust bezig zijn met een betere wereld, dat vinden we belangrijk. Het is
      tegenwoordig zelfs voor grote bedrijven belangrijk om steeds meer duurzamere keuzes te gaan maken. Wij dragen
      graag bij aan een zo duurzaam mogelijke visie van jouw bedrijf. Niet alleen omdat bedrijven steeds vaker kiezen
      voor een groene optie, maar ook omdat consumenten een steeds duidelijkere voorkeur hebben voor duurzame producten
      en werkwijzen.{' '}
    </>,
    <span className="text-secondaryDefault">
      Wij bieden oplossingen voor kantoren, hotels, winkels, spa’s en meer.
    </span>,
  ],
};

export function GreenTeamDescription() {
  return <OrangeInfoCard {...greenTeamDescriptionInfo} className="lg:flex-row-reverse" />;
}
