import { GameIcon } from '@/components/icons/game';
import { HeartIcon } from '@/components/icons/heart';
import { StarIcon } from '@/components/icons/star';
import { WhyGreenTeam } from '@/components/whyGreenTeam';

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
      'Een trap of vloer laten renoveren is een specialistische klus. GreenTeam is al ruim 20 jaar specialist in trap en vloerrenovatie. Onze vakmensen beschikken over de juiste kennis en ervaring voor verschillende soorten trappen en vloeren.',
      'Wij renoveren iedere trap en vloer nauwkeurig met hoogwaardige materialen en professionele technieken, waarbij geen detail wordt overgeslagen. Zo ben je verzekerd van een strak, duurzaam en hoogwaardig eindresultaat.',
    ],
  },
  {
    title: 'Persoonlijk advies op maat',
    paragraphs: [
      'We begrijpen dat een trap of vloerrenovatie een grote verandering is in uw woning. Samen werken we toe naar een eindresultaat waar u iedere dag van geniet en met trots laat zien aan familie, vrienden en bekenden.',
      'Daarom komen wij gratis bij u langs met kleurstalen, materiaalvoorbeelden en persoonlijk advies. Zo kunt u in uw eigen woning precies zien hoe de trap of vloer er in werkelijkheid uit komt te zien en met vertrouwen de juiste keuze maken.',
    ],
    icon: <GameIcon />,
  },
  {
    title: 'Duurzaamheid',
    icon: <HeartIcon />,
    paragraphs: [
      'GreenTeam staat voor duurzaam en groen. Daarom is het voor ons een passie om zowel houten vloeren als trappen een tweede leven te geven. Dat draagt niet alleen bij aan een beter leefklimaat, maar is vaak ook een stuk voordeliger dan het volledig vervangen van een vloer of trap.',
      'Met een professionele renovatie zorgen wij ervoor dat uw trap of vloer er weer als nieuw uitziet, zonder onnodig sloopwerk of hoge vervangingskosten.',
    ],
  },
];

export const VloerenleggenWhyGreenTeam = () => {
  return (
    <WhyGreenTeam
      title="Waarom kies ik voor GreenTeam?"
      bottomSectionText="Ik heb een specialist nodig!"
      bottomSectionBtnText="Praat met een specialist"
      bottomSectionBtnLink="/contact"
      cards={whyGreenTeamCardsInfo}
    />
  );
};
