import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/hexagon-&-3d',

  imgSrc: '/vloeren-leggen/vloeren-leggen-12.png',
  paragraphs: [
    <BodyText key="1">
      Geef uw interieur een unieke uitstraling met opvallende vloeropties zoals hexagonale tegels en 3D-vloeren.
      Hexagonale tegels creëren een modern honingraatpatroon dat direct karakter toevoegt aan elke ruimte, van een
      stijlvolle keuken tot een trendy badkamer. Met een ruime keuze aan kleuren en texturen biedt deze duurzame optie
      een speelse, artistieke look. Voor wie echt durft op te vallen, is een 3D-vloer dé keuze. Dit innovatieve ontwerp
      voegt visuele diepte toe en creëert een meeslepend effect dat uw interieur een persoonlijke en unieke touch geeft.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Hexagon & 3D',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Hexagon3D = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
