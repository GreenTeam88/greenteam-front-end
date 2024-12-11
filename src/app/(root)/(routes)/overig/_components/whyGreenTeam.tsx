import { WhyGreenTeamCard, WhyGreenTeamCardProps } from '@/components/cards';
import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';

const whyGreenTeamCardsInfo: WhyGreenTeamCardProps[] = [
  {
    title: 'Specialisten',
    icon: <StarIcon />,
    paragraphs: [
      'Een houten vloer laten schuren is een specialistische klus. GreenTeam is al ruim 20 jaar specialist in parketrenovatie. Onze parketteurs hebben alle kennis en ervaring van verschillende houtsoorten. ',
      'Wij schuren de houten vloer volledig egaal met hoogwaardige en professionele machines en zorgen ervoor dat er geen rand of hoek wordt overgeslagen. Zo ben je verzekerd van het beste eindresultaat.',
    ],
  },
  {
    title: 'Persoonlijk advies op maat',
    paragraphs: [
      <BodyText key="2">
        We begrijpen dat het een grote ingreep is en samen willen we naar het gewenste eindresultaat, wat u met trots
        laat zien wanneer er bekende over de vloer komen.
        <br />s Daarom komen wij graag langs met kleurstalen om je een accuraat beeld te geven over het eindresultaat.{' '}
      </BodyText>,
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
