import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, BodyTextSemibold, DetailsTypography, H2, HeadlineSemibold } from '@/components/theme/typography';

interface Tab {
  title: string;
  description: string;
  iconSrc: string;
}

// the foor tabs of the section (reosons why you should choose green team)
const tabs: Tab[] = [
  {
    title: '20 jaar ervaring',
    description: ' Van eenmanszaak naar landelijke specialist',
    iconSrc: '/home/starIcon.svg',
  },
  {
    title: 'Kwaliteit',
    description: 'Wij geven om kwaliteitswerk',
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

const TabsSection = () => {
  return (
    <div className="flex gap-4 justify-center lg:justify-start lg:gap-[33px]">
      <div className="flex flex-col w-fit  lg:w-[139px] gap-8 lg:gap-[55px] ">
        {tabs.slice(0, 2).map((tab) => (
          <div
            key={tab.title}
            className="flex flex-col  max-w-[200px] lg:max-w-full w-fit lg:w-full items-center gap-[11px] "
          >
            <img src={tab.iconSrc} />
            <HeadlineSemibold className="text-center">{tab.title}</HeadlineSemibold>
            <DetailsTypography className="text-center">{tab.description}</DetailsTypography>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:w-[139px]  gap-8 lg:gap-[55px] ">
        {tabs.slice(2).map((tab) => (
          <div key={tab.title} className="flex max-w-[200px] lg:max-w-full flex-col gap-[11px] items-center ">
            <img src={tab.iconSrc} />
            <HeadlineSemibold className="text-center">{tab.title}</HeadlineSemibold>
            <DetailsTypography className="text-center">{tab.description}</DetailsTypography>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[55px] "></div>
    </div>
  );
};

const ParagraphSection = () => {
  return (
    <div className="flex flex-col gap-[44px]">
      <div className="flex flex-col lg:w-[585px] gap-[11px]">
        <H2 className="text-primaryDefault">
          Daarom kies jij
          <br />
          voor GreenTeam
        </H2>
        <div className="flex flex-col gap-5">
          <BodyText>
            Wij hebben een grote passie voor vloeren en trappen, altijd met een focus op duurzaamheid. Oorspronkelijk
            zijn wij houtbewerkers, en dat heeft zich vertaald naar de renovatie van vloeren en trappen.{' '}
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
  );
};

export const WhyGreenTeam = () => {
  return (
    <div className=" h-fit px-4 lg:px-0 lg:h-[600px] relative w-full  flex items-center lg:overflow-hidden justify-center">
      <img src="/home/leaf.svg" className="absolute top-4 max-w-[200px] lg:max-w-full -right-5 rotate-[95.81px] " />
      <div className="flex gap-[91px] flex-col lg:flex-row relative z-10">
        {/* the section contains the foor tabs */}
        <TabsSection />
        {/* the section contains the title , paragraph and the button */}
        <ParagraphSection />
      </div>
    </div>
  );
};
