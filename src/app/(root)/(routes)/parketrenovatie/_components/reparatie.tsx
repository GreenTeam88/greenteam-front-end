import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/reparatie',
  imgSrc: '/Parketrenovatie/sixthFloor.png',
  paragraphs: [
    <BodyText key="1">
      Niet de hele vloer vervangen! Wij kunnen het parket leveren dat al in uw huis ligt om zo de reparatie uit te
      voeren met hetzelfde hout en er weer een geheel van te maken. zelf parket, laminaat, pvc leveren. We kunnen
      hetzelfde leveren als wat er ligt.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Reparatie',
  secondBtnText: 'Direct Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Reparatie = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
