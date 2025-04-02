import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/parket',
  imgSrc: '/vloeren-leggen/vloeren-leggen-1.png',
  paragraphs: [
    <BodyText key="1">
      Bij GreenTeam komt uw parketvloer pas echt tot zijn recht door vakmanschap en aandacht voor detail. Onze ervaren
      parketteurs leggen de vloeren met precisie, afgestemd op uw ruimte en wensen. We bieden deskundig advies om de
      perfecte parketvloer te kiezen die past bij uw stijl en behoeften. Bovendien leveren we alleen parketvloeren uit
      duurzame bronnen, voorzien van PEFC- en/of FSC-keurmerken, zodat u kiest voor zowel kwaliteit als een
      verantwoorde, milieuvriendelijke optie.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Parket leggen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Vloerenleggen = () => {
  return (
    <div className="flex flex-col gap-5 lg:gap-20 py-5 lg:py-28 px-2 bg-white  relative z-0 lg:items-center w-full">
      <div className="flex flex-col gap-[11px]  lg:items-center">
        <H2 className="text-primaryDefault">Vloeren leggen</H2>
        <BodyText className="text-black">Breng uw parketvloer weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse w-full" {...infoCardConfig} />
    </div>
  );
};
