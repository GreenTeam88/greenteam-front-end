import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/tapis',

  imgSrc: '/vloeren-leggen/vloeren-leggen-13.png',
  paragraphs: [
    <BodyText key="1">
      Een tapisvloer is meer dan alleen een vloer; het is een investering in tijdloze kwaliteit, comfort en schoonheid.
      Deze massief houten vloer voegt direct elegantie en stijl toe aan elke ruimte, terwijl het vakmanschap zorgt voor
      een naadloze uitstraling. Dankzij de duurzaamheid gaat een tapisvloer generaties mee en behoudt het zijn charme,
      zelfs bij intensief gebruik. De natuurlijke uitstraling van het hout creëert een warme en uitnodigende sfeer in uw
      woning. Met een tapisvloer kiest u voor een duurzame, stijlvolle oplossing die uw interieur naar een hoger niveau
      tilt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Tapis',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Tapis = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
