import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/deurmat',

  imgSrc: '/stofferen/stofferen-5.png',
  paragraphs: [
    <BodyText key="1">
      Een deurmat is meer dan alleen praktisch; het is de eerste indruk van uw woning. Met onze kwalitatieve deurmatten
      kiest u voor een stijlvolle entree die vuil en vocht buiten houdt en uw vloer beschermt. Gemaakt van duurzame
      materialen, zijn onze deurmatten bestand tegen dagelijks gebruik en passen ze naadloos bij elk interieur, van
      klassiek tot modern. Geef uw entree een uitnodigende uitstraling die gezien mag worden!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Is uw deurmat al 10 tot 20 jaar oud? Dan is het tijd om deze te vervangen voor een nieuwe!{' '}
    </BodyTextBold>,
  ],
  title: 'Deurmat',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Deurmat = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
