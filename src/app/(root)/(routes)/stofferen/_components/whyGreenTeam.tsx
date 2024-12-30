import { WhyGreenTeamCardProps } from '@/components/cards';
import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { HeadlineSemibold } from '@/components/theme/typography';
import { WhyGreenTeam } from '@/components/whyGreenTeam';

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
      <SecondaryOutlinedBtnLink href="/contact">Praat met een specialist</SecondaryOutlinedBtnLink>
    </div>
  );
};
export const WhyGreenTeamBasicPages = () => {
  return (
    <WhyGreenTeam
      title="Waarom kiest u voor GreenTeam"
      bottomSectionBtnLink="/contact"
      bottomSectionText="Ik heb een specialist nodig!"
      bottomSectionBtnText="Praat met een specialist"
      cards={whyGreenTeamCardsInfo}
    />
  );
};
