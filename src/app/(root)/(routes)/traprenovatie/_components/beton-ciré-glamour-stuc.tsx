import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-cire/glamour-stuc',
  imgSrc: '/traprenovatie/traprenovatie-9.png',
  paragraphs: [
    <BodyText key="1">
      Wilt u uw interieur een moderne en verfijnde uitstraling geven? BetonCiré Glamour Stuc combineert de stoere look
      van beton met een subtiele, glanzende touch. Dit hoogwaardige materiaal is perfect voor een chique en tijdloos
      design. Met een naadloze, glanzende afwerking voegt het luxe toe aan elke ruimte. Het is waterdicht en slijtvast,
      ideaal voor badkamers, keukens en woonkamers waar stijl en functionaliteit hand in hand gaan. Creëer een elegante
      sfeer met een vleugje glamour, geschikt voor vloeren, wanden en meubels in elke stijl. Transformeer uw interieur
      met BetonCiré Glamour Stuc en geniet van een stijlvolle, duurzame afwerking die indruk maakt!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Glamour stuc',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonGlamour = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
