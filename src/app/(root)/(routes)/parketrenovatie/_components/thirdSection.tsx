import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/schuren-en-lakken',

  imgSrc: '/Parketrenovatie/secondFloor.png',
  paragraphs: [
    <BodyText key="1">
      Dagelijks gebruik van een houten vloer leidt onvermijdelijk tot gebruikssporen zoals krasjes, oneffenheden en
      vlekjes. Na verloop van tijd, meestal na 10 tot 20 jaar, is het tijd om de vloer te onderhouden en te schuren,
      zodat deze weer zo goed als nieuw wordt. Voor langdurige bescherming is lakken een uitstekende keuze. Deze
      slijtvaste behandeling is ideaal voor intensief gebruikte ruimtes zoals hallen, keukens en woonkamers, omdat het
      de vloer beschermt tegen vocht en slijtage. Green Team biedt zelfs een super resistente lak die perfect is voor
      zwaar belaste vloeren.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Schuren en lakken',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const ThirdSection = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
