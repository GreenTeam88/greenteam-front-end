import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/laminaat',

  imgSrc: '/vloeren-leggen/vloeren-leggen-2.png',
  paragraphs: [
    <BodyText key="1">
      Laminaat is de ideale keuze voor wie een stijlvolle vloer wil zonder in te leveren op gebruiksgemak. Het biedt de
      luxe uitstraling van hout tegen een betaalbare prijs, met minimale onderhoudseisen. Laminaat is veelzijdig,
      geschikt voor rechte planken, visgraat- of tegelpatronen, en kan perfect worden afgestemd op uw smaak. Het is
      onderhoudsvriendelijk, waardoor u weinig tijd kwijt bent aan schoonmaken, maar altijd een stralend resultaat
      heeft. Onze ervaren parketteurs zorgen voor een professionele afwerking, zodat uw vloer er altijd strak uitziet.
      Met laminaat haalt u een functionele en prachtige vloer in huis, die ideaal is voor elk interieur.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Laminaat leggen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Laminaatleggen = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
