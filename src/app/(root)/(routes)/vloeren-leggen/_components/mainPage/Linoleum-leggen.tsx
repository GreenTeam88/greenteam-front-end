import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/linoleum',

  imgSrc: '/vloeren-leggen/vloeren-leggen-5.png',
  paragraphs: [
    <BodyText key="1">
      Linoleum is meer dan een vloer; het is een slimme investering in duurzaamheid, comfort en gezondheid. Gemaakt van
      97% natuurlijke grondstoffen zoals kalksteen, lijnzaadolie, hars en jute, is dit milieuvriendelijke materiaal voor
      72% recyclebaar. Linoleum combineert duurzaamheid met hygiëne, ideaal voor mensen met allergieën door het
      stofafstotende en makkelijk te reinigen oppervlak. Het is comfortabel, slijtvast en voelt zacht veerkrachtig aan
      onder de voeten. Met een breed scala aan kleuren en designs past linoleum moeiteloos in elk interieur. Kies voor
      een praktische, stijlvolle en toekomstbestendige vloer met linoleum.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Linoleum leggen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Linoleumleggen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
