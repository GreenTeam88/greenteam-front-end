import { InfoCardProps, OrangeInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Parketrenovatie',
  imgSrc: '/diensten/parqueteRenovation.png',
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
  paragraphs: [
    <>
      Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen
      zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment
      onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is je
      houten vloer weer zo goed als nieuw!
    </>,
    <>
      Een houten vloer laten schuren is een specialistische klus. GreenTeam is al ruim 20 jaar specialist in
      parketrenovatie. Onze parketteurs hebben alle kennis en ervaring van verschillende houtsoorten. Wij schuren de
      houten vloer volledig egaal met hoogwaardige en professionele machines en zorgen ervoor dat er geen rand of hoek
      wordt overgeslagen. Zo ben je verzekerd van het beste eindresultaat.
    </>,
    <>
      GreenTeam staat voor duurzaam en groen.{' '}
      <span className="text-secondaryDefault">
        Het is daarom ook een passie van ons om een houten vloer een tweede leven te kunnen geven.
      </span>{' '}
      Dat draagt niet alleen bij aan een beter leefklimaat, maar is ook nog eens een stuk goedkoper dan de aanschaf van
      een volledig nieuwe vloer.
    </>,
  ],
};
export const ParaqueteRenovation = () => {
  return <OrangeInfoCard {...config} />;
};
