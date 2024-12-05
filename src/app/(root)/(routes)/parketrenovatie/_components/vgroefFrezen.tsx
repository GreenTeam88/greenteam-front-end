import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/v-groef-frezen',

  imgSrc: '/Parketrenovatie/eigthFloor.png',
  paragraphs: [
    <BodyText key="1">
      Frezen is een techniek waarbij met een roterend gereedschap, de frees, materiaal tussen de vloerplanken wordt
      verwijderd. Hiermee frissen we de ‘vellingkant’ – de groeven tussen de planken – op voor een strakke en verzorgde
      afwerking. Deze V-groeven, schuine uitsnijdingen aan de randen van de vloerdelen, creëren een luxe V-vorm die uw
      vloer een unieke uitstraling en een stijlvol accent geeft, perfect passend in elke ruimte.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'V-groef frezen',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const VgroefFrezen = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
