import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { SecondaryOutlinedBtnLink } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';

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
      <BodyText>
        We begrijpen dat een traprenovatie een grote ingreep kan zijn en samen met u willen we naar het gewenste
        eindresultaat, wat u met trots kunt laten zien wanneer er bekenden over de vloer komen en zelf dagelijks van
        kunt genieten. Daarom komen wij graag langs met stalen om je een accuraat beeld te geven over het
        eindresultaat. 
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

const WhyGreenTeamCard: React.FC<WhyGreenTeamCardProps> = ({ icon, paragraphs, title }) => {
  return (
    <div className="flex lg:min-h-[350px] flex-col py-[33px] h-full gap-[11px] px-[22px] rounded-[10px]  border-2 border-black10 border-opacity-10 max-w-[387px] ">
      <div className="flex gap-3 items-center">
        {icon}
        <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
      </div>
      <div className="flex flex-col gap-8">
        {paragraphs.map((paragraph) =>
          typeof paragraph === 'string' ? <BodyText key={paragraph}>{paragraph}</BodyText> : paragraph
        )}
      </div>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="flex items-center gap-[22px] p-[22px] ">
      <HeadlineSemibold>Ik heb een specialist nodig!</HeadlineSemibold>
      <SecondaryOutlinedBtnLink href="/contact">Praat met een specialist</SecondaryOutlinedBtnLink>
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
