import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, BodyTextSemibold, DetailsTypography, H2, HeadlineSemibold } from '@/components/theme/typography';

interface Tab {
  title: string;
  description: string;
  iconSrc: string;
}

const tabs: Tab[] = [
  {
    title: '20 jaar ervaring',
    description: ' Van eenmanszaak naar landelijke specialist',
    iconSrc: '/home/starIcon.svg',
  },
  {
    title: 'Kwaliteit',
    description: 'Wij geven omkwaliteitswerk',
    iconSrc: '/home/trueIcon.svg',
  },
  {
    title: 'Duurzaam',
    description: 'Renovatie is beter dan vervanging',
    iconSrc: '/home/heartIcon.svg',
  },
  {
    title: 'Op maat',
    description: 'Omdat elke vloer/trap/klant iets anders nodig heeft',
    iconSrc: '/home/OpMeatIcon.svg',
  },
];

export const HomeSecondSection = () => {
  return (
    <div className="h-[600px] relative w-full  flex items-center overflow-hidden justify-center">
      <img src="/home/leaf.svg" className="absolute top-4 -right-5 rotate-[95.81px] " />
      <div className="flex gap-[91px] relative z-10">
        <div className="flex gap-[33px]">
          <div className="flex flex-col w-[139px] gap-[55px] ">
            {tabs.slice(0, 2).map((tab) => (
              <div key={tab.title} className="flex flex-col items-center gap-[11px] ">
                <img src={tab.iconSrc} width={77} />
                <HeadlineSemibold className="text-center">{tab.title}</HeadlineSemibold>
                <DetailsTypography className="text-center">{tab.description}</DetailsTypography>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[139px] gap-[55px] ">
            {tabs.slice(2).map((tab) => (
              <div key={tab.title} className="flex flex-col gap-[11px] items-center ">
                <img src={tab.iconSrc} width={77} />
                <HeadlineSemibold className="text-center">{tab.title}</HeadlineSemibold>
                <DetailsTypography className="text-center">{tab.description}</DetailsTypography>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[55px] "></div>
        </div>
        <div className="flex flex-col gap-[44px]">
          <div className="flex flex-col w-[585px] gap-[11px]">
            <H2 className="text-primaryDefault">
              Daarom kies jij
              <br />
              voor GreenTeam
            </H2>
            <div className="flex flex-col gap-5">
              <BodyText>
                Wij hebben een grote passie voor vloeren en trappen, altijd met een focus op duurzaamheid.
                Oorspronkelijk zijn wij houtbewerkers, en dat heeft zich vertaald naar de renovatie van vloeren en
                trappen.{' '}
              </BodyText>
              <BodyTextSemibold className="text-primaryDefault">
                Onze toewijding aan kwaliteit en het overtreffen van verwachtingen definieert de cultuur van GreenTeam.
              </BodyTextSemibold>
              <BodyText>
                We geven om zowel mensen als het milieu, daarom blijven we voortdurend innoveren om onze bijdrage te
                leveren. Het belangrijkste: bij GreenTeam houden we ons aan onze afspraken.
              </BodyText>
            </div>
          </div>
          <SecondaryOutlinedBtn className="w-fit">Meer over ons</SecondaryOutlinedBtn>
        </div>
      </div>
    </div>
  );
};
