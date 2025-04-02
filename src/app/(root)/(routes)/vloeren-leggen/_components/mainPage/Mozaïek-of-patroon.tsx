import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/mozaiek-en-patroon',

  imgSrc: '/vloeren-leggen/vloeren-leggen-11.png',
  paragraphs: [
    <BodyText key="1">
      Mozaïektegels zijn de perfecte keuze voor wie op zoek is naar iets unieks en verfijnds. Met hun met de hand
      geplaatste stukjes creëren ze artistieke patronen die elke ruimte verrijken. Of het nu in de keuken, badkamer of
      entree is, mozaïek voegt karakter en elegantie toe. Deze duurzame tegels zijn geschikt voor zowel muren als
      vloeren, waardoor ze veelzijdig en praktisch zijn. Kies voor mozaïektegels en geef uw interieur een exclusieve,
      stijlvolle uitstraling!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Mozaïek en patroon',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const MozaïekOfPatroon = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
