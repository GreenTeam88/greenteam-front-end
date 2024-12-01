import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie',
  imgSrc: '/stofferen/stofferen-1.png',
  paragraphs: [
    <BodyText key="1">
      DagelijksDagelijks wordt er gelopen op een houten vloer. Het is dan ook logisch dat op een gegeven moment
      gebruikssporen zoals krasjes, oneffenheden en vlekjes te zien zijn. Elke houten vloer zal daarom op een gegeven
      moment onderhouden moeten worden en worden geschuurd. Op deze manier kan je alle gebruikssporen laten verdwijnen
      en is je houten vloer weer zo goed als nieuw. Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om
      daar wat aan te doen!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Trap',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Stofferen = () => {
  return (
    <div className="flex flex-col gap-20  py-28 bg-white  relative z-0 items-center w-full">
      <div className="flex flex-col gap-[11px] items-center">
        <H2 className="text-primaryDefault">Stofferen</H2>
        <BodyText className="text-black">Breng uw trap weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...infoCardConfig} />
    </div>
  );
};
