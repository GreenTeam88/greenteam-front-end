import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/pvc',

  imgSrc: '/vloeren-leggen/vloeren-leggen-3.png',
  paragraphs: [
    <BodyText key="1">
      Een PVC-vloer is een investering in duurzaamheid en gemak, die jarenlang meegaat zonder gedoe. Dankzij de
      slijtvaste eigenschappen blijft de vloer er als nieuw uitzien, zelfs bij intensief gebruik. PVC is
      onderhoudsvriendelijk, eenvoudig schoon te houden en krasbestendig, wat het ideaal maakt in vergelijking met
      houten vloeren. Onze ervaren parketteurs zorgen voor een strak en professioneel resultaat, van voorbereiding tot
      afwerking. Met PVC kiest u voor een praktische, stijlvolle vloer die geen concessies doet.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'PVC leggen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const PVCleggen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
