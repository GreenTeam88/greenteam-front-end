import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/pvc-tegels',

  imgSrc: '/vloeren-leggen/vloeren-leggen-10.png',
  paragraphs: [
    <BodyText key="1">
      PVC Tegels geven uw woonkamer een stijlvolle en frisse uitstraling, met een perfecte balans tussen luxe en
      duurzaamheid. Of u nu kiest voor gepolijste natuursteen voor een elegante look of keramische grestegels voor een
      praktische en duurzame optie, tegels passen moeiteloos in elke interieurstijl. Ze zijn slijtvast,
      onderhoudsvriendelijk en brengen tijdloze schoonheid in uw woning. Maak van uw vloer een statement met pcv tegels
      die design en functionaliteit combineren!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'PVC Tegels',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const PVCTegels = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
