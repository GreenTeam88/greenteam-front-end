import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/vloerverwarming',
  imgSrc: '/overig/overig-1.png',
  paragraphs: [
    <BodyText key="1">
      Met onze professionele vloerverwarmingssystemen transformeren wij uw woning tot een moderne, comfortabele
      leefruimte. Wij bieden advies op maat om het ideale systeem te kiezen dat aansluit bij uw woning en wensen. Onze
      experts zorgen voor een efficiënte installatie en een perfecte warmteverdeling, geschikt voor elke ruimte, van
      woonkamer tot badkamer of keuken. Vloerverwarming is compatibel met diverse vloerbedekkingen zoals tegels, PVC en
      parket. Daarnaast is het energiezuinig en biedt het ultiem comfort zonder storende radiatoren. Kies voor
      gelijkmatige warmte, lagere energiekosten en een verhoogde waarde en uitstraling van uw woning.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!
    </BodyTextBold>,
  ],
  title: 'Vloerverwarming',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Overig = () => {
  return (
    <div className="flex flex-col gap-20  py-28 bg-white  relative z-0 items-center w-full">
      <div className="flex flex-col gap-[11px] items-center">
        <H2 className="text-primaryDefault">Overig</H2>
        <BodyText className="text-black">Breng uw parketvloer weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...infoCardConfig} />
    </div>
  );
};
