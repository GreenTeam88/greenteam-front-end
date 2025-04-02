import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/vloeren-leggen/bourgogne',

  imgSrc: '/vloeren-leggen/vloeren-leggen-14.png',
  paragraphs: [
    <BodyText key="1">
      Een Bourgogne vloer is meer dan alleen een vloer; het is een kunstwerk uit de Franse regio Bourgondië. Deze
      massief eikenhouten planken, verkrijgbaar in diverse breedtes en lengtes, creëren een unieke en warme uitstraling
      die perfect in elke ruimte past. Met authentieke charme en vakmanschap biedt de vloer duurzame kwaliteit dankzij
      geolied hout dat jarenlang meegaat. Of u nu een modern of klassiek interieur heeft, de Bourgogne vloer voegt stijl
      en veelzijdigheid toe aan uw woning. Creëer een warme, uitnodigende sfeer die karakter en schoonheid uitstraalt in
      uw huis.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Bourgogne',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Bourgogne = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
