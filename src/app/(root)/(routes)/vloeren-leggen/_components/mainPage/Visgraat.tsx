import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/visgraat',

  imgSrc: '/vloeren-leggen/vloeren-leggen-6.png',
  paragraphs: [
    <BodyText key="1">
      Een visgraatvloer brengt direct elegantie en stijl in uw woning met zijn karakteristieke, tijdloze patroon. Of u
      nu kiest voor hout, laminaat of PVC, dit opvallende design past moeiteloos in zowel moderne als klassieke
      interieurs. Met opties variërend van kleine tot grote graten kunt u het patroon aanpassen aan uw ruimte en
      persoonlijke voorkeur. Of u nu de warme uitstraling van hout of het onderhoudsgemak van PVC zoekt, een
      visgraatvloer geeft uw interieur direct meer persoonlijkheid en tilt het naar een hoger niveau.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Visgraat',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Visgraat = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
