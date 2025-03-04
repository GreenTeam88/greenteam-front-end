import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { BodyText } from '@/components/theme/typography';
import { WhyGreenTeam } from '@/components/whyGreenTeam';

type WhyGreenTeamCardProps = {
  title: string;
  paragraphs: string[] | JSX.Element[];
  icon: React.ReactNode;
};

const whyGreenTeamCardsInfo: WhyGreenTeamCardProps[] = [
  {
    title: 'Specialisten',
    icon: <StarIcon />,
    paragraphs: [
      'Een trap laten bekleden is een specialistische klus, of het nu gaat om laminaat, PVC, hout, tapijt of linoleum. Green Team blinkt al ruim 20 jaar uit als specialist in traprenovaties. Onze specialisten hebben alle kennis en ervaring van verschillende soorten trappen. Wij werken met hoogwaardige en professionele machines en zorgen ervoor dat er geen rand of hoek wordt overgeslagen. Zo bent u verzekerd van het beste eindresultaat.  ',
    ],
  },
  {
    title: 'Persoonlijk advies op maat',
    paragraphs: [
      <BodyText key="1">
        We begrijpen dat het een grote ingreep is en samen willen we naar het gewenste eindresultaat, wat u met trots
        laat zien wanneer er bekende over de vloer komen. Daarom komen wij graag langs met kleurstalen om u een accuraat
        beeld te geven over het eindresultaat.
      </BodyText>,
    ],
    icon: <GameIcon />,
  },
  {
    title: 'Duurzaamheid',
    icon: <HeartIcon />,
    paragraphs: [
      'Green Team staat voor duurzaam en groen. Het is daarom ook een passie van ons om een trap een tweede leven te kunnen geven. Dat draagt niet alleen bij aan een beter leefklimaat, maar is ook nog eens een stuk goedkoper dan de aanschaf van een volledig nieuwe trap. ',
    ],
  },
];

export const TraprenovatieWhyGreenTeam = () => {
  return (
    <WhyGreenTeam
      title="Waarom kiest u voor GreenTeam?"
      bottomSectionBtnLink="/contact"
      bottomSectionText="Praat met een specialist"
      bottomSectionBtnText="Ik heb een specialist nodig!"
      cards={whyGreenTeamCardsInfo}
    />
  );
};
