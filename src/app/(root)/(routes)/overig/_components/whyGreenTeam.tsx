import { WhyGreenTeamCardProps } from '@/components/cards';
import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { BodyText } from '@/components/theme/typography';
import { WhyGreenTeam } from '@/components/whyGreenTeam';

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

export const OverigWhyGreenTeam = () => {
  return (
    <WhyGreenTeam
      cards={whyGreenTeamCardsInfo}
      title="Waarom kies ik voor GreenTeam?"
      bottomSectionBtnLink="/contact"
      bottomSectionBtnText="Praat met een specialist"
      bottomSectionText="Ik heb een specialist nodig!"
    />
  );
};
