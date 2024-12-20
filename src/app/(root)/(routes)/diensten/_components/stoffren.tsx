import { InfoCardProps, WhiteInfoCard } from './cards';

const config: InfoCardProps = {
  imgSrc: '/diensten/stairs.png',
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
  title: 'Stofferen',
  paragraphs: [
    <>
      Het stofferen van een trap, vloer of meubelstuk is een waardevolle investering die de uitstraling en het comfort
      van je interieur compleet kan transformeren. Of je nu kiest voor een stijlvolle gestoffeerde trap, een
      comfortabele vloerbedekking of een vernieuwd meubel, professioneel stoffeerwerk is dé basis voor een stijlvol en
      functioneel interieur.
    </>,
    <>
      Stofferen vereist oog voor detail en vakmanschap. Bij GreenTeam zijn we al ruim 20 jaar gespecialiseerd in het
      stofferen van trappen, vloeren en meubels. Onze experts werken met diverse hoogwaardige materialen, zoals tapijt,
      sisal, linoleum en andere duurzame stoffen, en passen de nieuwste technieken toe om het beste resultaat te
      garanderen.
    </>,
    <>
      <span className="text-secondaryDefault font-bold">
        {' '}
        We begrijpen dat ieder project uniek is, daarom bieden we maatwerk dat aansluit bij jouw wensen en interieur.
      </span>{' '}
      Van een perfect afgewerkte trap met naadloze overgangen tot een comfortabel gestoffeerde vloer die warmte en stijl
      combineert—bij GreenTeam ben je verzekerd van vakwerk.
    </>,
    <>
      Met onze ervaring en passie voor kwaliteit maken wij jouw trap, vloer of meubels weer als nieuw. Kies voor
      GreenTeam en laat je inspireren door onze expertise in stofferen.
    </>,
  ],
};

export const Stoffren = () => {
  return (
    <div className="py-28 bg-transparent">
      <WhiteInfoCard {...config} />
    </div>
  );
};
