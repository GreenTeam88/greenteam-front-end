import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/drevelen',
  imgSrc: '/Parketrenovatie/seventhFloor.png',
  paragraphs: [
    <BodyText key="1">
      Bij drevelen slaan we spijkers met precisie dieper in de vloer, zodat ze stevig in de ondervloer verankerd zijn en
      een glad oppervlak ontstaat. Met onze gespecialiseerde techniek liggen de nagels gelijkmatig en vormen ze geen
      obstakel voor vervolgbehandelingen. Vervolgens vullen we de overgebleven gaatjes op met een mix van hars en
      houtstof, afgestemd op uw vloer, zodat de spijkergaten volledig uit het zicht verdwijnen. Kleine scheuren en
      krassen werken we tegelijkertijd bij, wat resulteert in een prachtig glad en verzorgd eindresultaat.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Drevelen',
  secondBtnText: 'Direct Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Drevelen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
