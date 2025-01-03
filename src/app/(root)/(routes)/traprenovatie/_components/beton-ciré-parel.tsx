import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-cire/parel',
  imgSrc: '/traprenovatie/traprenovatie-11.png',
  paragraphs: [
    <BodyText key="1">
      Wilt u uw interieur een stabiele en luxueuze uitstraling geven? BetonCiré Parel biedt een naadloze, glanzende
      afwerking met een zachte parelmoerglans, perfect voor moderne en elegante ruimtes. Wat maakt BetonCiré Parel zo
      uniek? Het straalt verfijning uit met een subtiele, tijdloze glans die uw interieur een luxe uitstraling geeft.
      Dit veelzijdige materiaal is ideaal voor vloeren, wanden en meubels in badkamers, keukens en woonkamers. Bovendien
      is het duurzaam en waterbestendig, bestand tegen slijtage en vocht, wat zorgt voor langdurige kwaliteit en
      gebruiksgemak. BetonCiré Parel combineert decoratieve schoonheid met praktische voordelen, waarmee u een strakke,
      stijlvolle sfeer creëert die elke ruimte transformeert tot een elegant pronkstuk.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Parel',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonParel = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
