import { InfoCardProps, OrangeInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Overige diensten',
  buttonText: 'Offerte aanvragen',
  buttonLink: '/offerte',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte',
  imgSrc: [
    '/diensten/OverigeDiensten.png',
    '/diensten/crausel/crausel-1.png',
    '/diensten/crausel/crausel-2.png',
    '/diensten/crausel/crausel-3.png',
    '/diensten/crausel/crausel-4.png',
    '/diensten/crausel/crausel-5.png',
    '/diensten/crausel/crausel-6.png',
    '/diensten/crausel/crausel-7.png',
  ],
  paragraphs: [
    <>
      Bij GreenTeam bieden we een breed scala aan diensten die de functionaliteit en uitstraling van je interieur
      verbeteren. Of het nu gaat om het installeren van vloerverwarming voor een comfortabele en efficiënte verwarming,
      of het egaliseren van je vloer voor een perfecte basis, wij zorgen altijd voor een hoogwaardige afwerking.
    </>,
    <>
      <span className="text-secondaryDefault font-bold">
        {' '}
        Daarnaast zijn wij gespecialiseerd in gietvloeren, die een moderne, naadloze uitstraling geven aan elke ruimte.
      </span>{' '}
      Of je nu kiest voor een strakke designvloer of een vloer die gemakkelijk te onderhouden is, wij bieden de beste
      oplossingen voor jouw interieur. Ook het behandelen van natuursteen behoort tot onze expertise, zodat jouw stenen
      vloeren en oppervlakken langdurig mooi blijven en optimaal beschermd zijn.
    </>,
    <>
      Tot slot bieden wij veilige opslagoplossingen voor je spullen, zodat je zonder zorgen kunt verbouwen of
      vernieuwen. Met onze jarenlange ervaring en vakmanschap zorgen wij voor het beste resultaat, zodat jouw woning
      zowel functioneel als stijlvol is.{' '}
    </>,
  ],
};

export const OverigeDiensten = () => {
  return <OrangeInfoCard {...config} />;
};
