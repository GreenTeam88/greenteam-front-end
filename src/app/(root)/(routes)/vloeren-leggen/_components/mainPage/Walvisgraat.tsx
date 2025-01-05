import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/walvisgraat',

  imgSrc: '/vloeren-leggen/vloeren-leggen-7.png',
  paragraphs: [
    <BodyText key="1">
      Dagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment gebruikssporen
      zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven moment
      onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen en is je
      houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat
      aan te doen!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Walvisgraat',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Walvisgraat = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
