import { isValidElement } from 'react';

import { WhyGreenTeamCardProps } from '@/components/cards';
import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import { WhyGreenTeam } from '@/components/whyGreenTeam';

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
      <BodyText>
        We begrijpen dat het een grote ingreep is en samen willen we naar het gewenste eindresultaat, wat u met trots
        laat zien wanneer er bekende over de vloer komen. <br /> Daarom komen wij graag langs met kleurstalen om je een
        accuraat beeld te geven over het eindresultaat.
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

const WhyGreenTeamCard: React.FC<WhyGreenTeamCardProps> = ({ icon, paragraphs, title }) => {
  return (
    <div className="flex lg:min-h-[350px] flex-col py-[33px] h-full gap-[11px] px-[22px] rounded-[10px]  border-2 border-black10 border-opacity-10 max-w-[387px] ">
      <div className="flex gap-3 items-center">
        {icon}
        <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
      </div>
      <div className="flex flex-col gap-8">
        {isValidElement(paragraphs)
          ? paragraphs
          : (paragraphs as string[]).map((paragraph) => <BodyText key={paragraph}>{paragraph}</BodyText>)}
      </div>
    </div>
  );
};

export const ParketrenovatieWhyGreenTeam = () => {
  return (
    <WhyGreenTeam
      bottomSectionBtnText="Praat met een specialist"
      bottomSectionText="heb een specialist nodig!"
      bottomSectionBtnLink="/contact"
      cards={whyGreenTeamCardsInfo}
      title="Waarom kies ik voor GreenTeam?"
    />
  );
};
