import { WhyGreenTeamCard, WhyGreenTeamCardProps } from '@/components/cards';
import { SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { H2, HeadlineSemibold } from '@/components/theme/typography';

const BottomSection: React.FC<{ text: string; btnText: string; btnLink: string }> = ({ btnLink, btnText, text }) => {
  return (
    <div className="flex items-center flex-col  lg:flex-row gap-4 lg:gap-[22px] p-[22px] ">
      <HeadlineSemibold>{text}</HeadlineSemibold>
      <SecondaryOutlinedBtnLink href={btnLink}>{btnText}</SecondaryOutlinedBtnLink>
    </div>
  );
};

type WhyGreenTeamSectionProps = {
  title: string;
  bottomSectionText: string;
  bottomSectionBtnText: string;
  bottomSectionBtnLink: string;
  cards: WhyGreenTeamCardProps[];
};

export const WhyGreenTeam: React.FC<WhyGreenTeamSectionProps> = ({
  bottomSectionBtnLink,
  bottomSectionBtnText,
  bottomSectionText,
  cards,
  title,
}) => {
  return (
    <div className="flex px-2 flex-col py-12 lg:py-32 gap-4 items-center">
      <H2 className="text-primaryDefault">{title}</H2>
      <div className="flex relative flex-col lg:flex-row items-center lg:items-start gap-[21px]">
        {cards.map((cardInfo) => (
          <WhyGreenTeamCard key={cardInfo.title} {...cardInfo} />
        ))}
      </div>
      <BottomSection btnLink={bottomSectionBtnLink} btnText={bottomSectionBtnText} text={bottomSectionText} />
    </div>
  );
};
