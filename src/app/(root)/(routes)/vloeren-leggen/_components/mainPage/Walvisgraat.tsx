import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/walvisgraat',

  imgSrc: '/vloeren-leggen/vloeren-leggen-7.png',
  paragraphs: [
    <BodyText key="1">
      Walvisgraat is de elegante grote broer van de traditionele visgraatvloer, met bredere en langere planken die een
      rustige en harmonieuze sfeer creëren. Dit patroon is ideaal voor grotere ruimtes en voegt direct warmte en stijl
      toe aan uw interieur. Met zijn unieke, opvallende design blijft walvisgraat een echte blikvanger. Het combineert
      de klassieke charme van visgraat met een moderne twist, perfect voor wie op zoek is naar een tijdloze en
      stijlvolle vloer.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Walvisgraat',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Walvisgraat = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse lg:h-[542px]" {...infoCardConfig} />;
};
