import { WhyGreenTeamCard, WhyGreenTeamCardProps } from '@/components/cards';
import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { H2, HeadlineSemibold } from '@/components/theme/typography';

const whyGreenTeamCardsInfo: WhyGreenTeamCardProps[] = [
  {
    title: 'Specialisten',
    icon: <StarIcon />,
    paragraphs: [
      'Een deurmat of tapijt laten leggen vraagt om specialistische kennis en daar blinkt Green Team al ruim 20 jaar in uit. Onze ervaren stoffeerders kennen de eigenschappen van elke tapijtsoort en werken met hoogwaardige, professionele apparatuur. Wij komen langs, meten in en snijden met professionele machines, zodat u verzekerd bent van een prachtig, uniform eindresultaat.',
    ],
  },
  {
    title: 'Persoonlijk advies op maat',
    paragraphs: [
      'Twijfelt u over de mogelijkheden? Wij nemen die zorgen uit handen en komen samen met u tot het beste eindresultaat, wat u met trots kunt laten zien wanneer er bekenden over de vloer komen en zelf elke dag van kunt genieten. Daarom komen wij graag langs met kleurstalen om u een accuraat beeld te geven over het eindresultaat.',
    ],
    icon: <GameIcon />,
  },
  {
    title: 'Duurzaamheid',
    icon: <HeartIcon />,
    paragraphs: [
      ' GreenTeam staat voor duurzaam en groen. Het is daarom ook een passie van ons om milieuvriendelijke materialen te gebruiken en oud tapijt zo duurzaam mogelijk af te voeren. Zo min mogelijk snijverlies is het doel bij de voorbereiding, dit zorgt voor zo min mogelijk afval en dat draagt ook weer bij aan een beter leefklimaat. ',
    ],
  },
];

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
    <div className="flex px-2 flex-col  py-32 gap-4 items-center">
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
