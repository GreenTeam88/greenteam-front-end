import { InfoCardProps, WhiteInfoCard } from './cards';
import { BodyText, H2 } from './theme/typography';

export const MainPagesSecondSection: React.FC<{
  title: string;
  description: string;
  cardConfig: InfoCardProps;
}> = ({ cardConfig }) => {
  return (
    <div className="flex flex-col gap-5 bg-white px-2 lg:px-0 lg:gap-20 py-5 lg:py-28   relative z-0 lg:items-center w-full">
      <div className="flex flex-col gap-[11px]  lg:items-center">
        <H2 className="text-primaryDefault">Stofferen</H2>
        <BodyText className="text-black ">Breng uw trap weer tot leven met professionele renovatie</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...cardConfig} />
    </div>
  );
};
