import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';

type WhyGreenTeamCardProps = {
  title: string;
  paragraphs: string[];
  icon: React.ReactNode;
};

const whyGreenTeamCardsInfo: WhyGreenTeamCardProps[] = [
  {
    title: 'Specialisten',
    icon: <StarIcon />,
    paragraphs: [
      'Een houten vloer laten schuren is een specialistische klus. GreenTeam is al ruim 20 jaar specialist in parketrenovatie. Onze parketteurs hebben alle kennis en ervaring van verschillende houtsoorten. ',
      'Wij schuren de houten vloer volledig egaal met hoogwaardige en professionele machines en zorgen ervoor dat er geen rand of hoek wordt overgeslagen. Zo ben je verzekerd van het beste eindresultaat. ',
    ],
  },
  {
    title: 'Persoonlijk advies op maat',
    paragraphs: [
      'We begrijpen dat het een grote ingreep is en samen willen we naar het gewenste eindresultaat, wat u met trots laat zien wanneer er bekende over de vloer komen. Daarom komen wij graag langs met kleurstalen om je een accuraat beeld te geven over het eindresultaat. ',
    ],
    icon: <GameIcon />,
  },
  {
    title: 'Duurzaamheid',
    icon: <HeartIcon />,
    paragraphs: [
      'GreenTeam staat voor duurzaam en groen. Het is daarom ook een passie van ons om een houten vloer een tweede leven te kunnen geven. Dat draagt niet alleen bij aan een beter leefklimaat, maar is ook nog eens een stuk goedkoper dan de aanschaf van een volledig nieuwe vloer. ',
    ],
  },
];

const WhyGreenTeamCard: React.FC<WhyGreenTeamCardProps> = ({ icon, paragraphs, title }) => {
  return (
    <div className="flex lg:min-h-[350px] flex-col py-[33px] h-full gap-[11px] px-[22px] rounded-[10px]  border-2 border-black10 border-opacity-10 max-w-[387px] ">
      <div className="flex gap-3">
        {icon}
        <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
      </div>
      <div className="flex flex-col gap-8">
        {paragraphs.map((paragraph) => (
          <BodyText key={paragraph}>{paragraph}</BodyText>
        ))}
      </div>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="flex items-center gap-[22px] p-[22px] ">
      <HeadlineSemibold>Ik heb een specialist nodig!</HeadlineSemibold>
      <SecondaryOutlinedBtn>Praat met een specialist</SecondaryOutlinedBtn>
    </div>
  );
};
export const WhyGreenTeam = () => {
  return (
    <div className="flex flex-col  py-32 gap-4 items-center">
      <H2 className="text-primaryDefault">Waarom kies ik voor GreenTeam?</H2>
      <div className="flex relative flex-col lg:flex-row items-center lg:items-start gap-[21px]">
        {whyGreenTeamCardsInfo.map((cardInfo) => (
          <WhyGreenTeamCard key={cardInfo.title} {...cardInfo} />
        ))}
      </div>
      <BottomSection />
    </div>
  );
};
