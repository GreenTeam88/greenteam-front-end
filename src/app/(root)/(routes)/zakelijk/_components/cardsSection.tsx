import { H2 } from '@/components/theme/typography';

type CardConfig = {
  name: string;
  img: string;
};

const cardsConfig: CardConfig[] = [
  {
    name: 'Bedrijfsruimtes',
    img: '/zakelijk/cards/cards-1.png',
  },
  {
    name: 'Kantoorpanden',
    img: '/zakelijk/cards/cards-2.png',
  },
  {
    name: 'Hotels',
    img: '/zakelijk/cards/cards-3.png',
  },
  {
    name: "Spa's",
    img: '/zakelijk/cards/cards-4.png',
  },
  {
    name: 'Sportzalen',
    img: '/zakelijk/cards/cards-5.png',
  },
  {
    name: 'Winkels',
    img: '/zakelijk/cards/cards-6.png',
  },
  {
    name: 'Musea',
    img: '/zakelijk/cards/cards-7.png',
  },
  {
    name: 'Scholen',
    img: '/zakelijk/cards/cards-8.png',
  },
  {
    name: 'Theaters',
    img: '/zakelijk/cards/cards-9.png',
  },
  {
    name: 'Bibliotheken',
    img: '/zakelijk/cards/cards-10.png',
  },
  {
    name: 'Kerkgebouwen',
    img: '/zakelijk/cards/cards-11.png',
  },
  {
    name: 'Verenigingen',
    img: '/zakelijk/cards/cards-12.png',
  },
  {
    name: 'Bedrijfsruimtes',
    img: '/zakelijk/cards/cards-13.png',
  },
];

const ZakelijkCard: React.FC<CardConfig> = ({ img: imgSrc, name }) => {
  return (
    <div className="flex flex-col border-2 border-black10 border-opacity-10">
      <img src={imgSrc} />
      <div className="flex items-center justify-center py-2">
        <h3 className="text-xl font-bold text-blackDark">{name}</h3>
      </div>
    </div>
  );
};

export const ZakelijkCardsSection = () => {
  return (
    <div className="flex items-center flex-col gap-[17px] pb-24 lg:pb-14 px-1">
      <H2 className="text-primaryDefault text-center ">Geschikt voor locaties zoals...</H2>
      <div className="flex  max-w-[1256px] flex-wrap gap-8">
        {cardsConfig.map((cardConfig) => (
          <ZakelijkCard key={cardConfig.name} {...cardConfig} />
        ))}
      </div>
    </div>
  );
};
