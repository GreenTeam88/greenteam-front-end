import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/plinten-en-deklijsten',

  imgSrc: '/Parketrenovatie/ninethFloor.png',
  paragraphs: [
    <BodyText key="1">
      Plinten en deklijsten zorgen voor een nette overgang tussen vloer en muur en bieden zowel decoratieve als
      praktische voordelen. Plinten verbergen onregelmatigheden en beschermen de onderkant van de muur tegen stoten en
      beschadigingen door schoonmaakwerkzaamheden. Deklijsten, die plat op de vloer worden geplaatst, bieden extra
      bescherming tegen stof en vocht en voegen een subtiel, stijlvol detail toe. Met onze all-in service levert Green
      Team plinten en deklijsten in diverse stijlen en maten, zodat u volledig ontzorgd wordt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Plinten & Deklijsten',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte',
};

export const PlintenDeklijsten = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
