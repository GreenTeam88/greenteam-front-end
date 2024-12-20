import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/schuren-en-hardwaxen',
  imgSrc: '/Parketrenovatie/fourthFloor.png',
  paragraphs: [
    <BodyText key="1">
      Dagelijks gebruik laat zijn sporen na op een houten vloer, zoals krasjes, oneffenheden en vlekjes. Na verloop van
      tijd, vaak na 10 tot 20 jaar, is het daarom noodzakelijk om de vloer te onderhouden en te schuren, zodat deze weer
      als nieuw oogt. Voor een optimale afwerking en bescherming is een behandeling met hardwax een uitstekende keuze.
      Hardwax combineert de voordelen van olie met een extra waxlaag, wat zorgt voor een betere weerstand tegen vuil en
      vocht. Daarnaast benadrukt het de natuurlijke houtstructuur en geeft het de vloer een warme, rijke uitstraling,
      waardoor het hout weer tot leven komt.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Schuren en hardwaxen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const FifthSection = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
