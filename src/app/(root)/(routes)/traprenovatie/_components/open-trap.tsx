import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/open-trap',
  imgSrc: '/traprenovatie/traprenovatie-15.png',
  paragraphs: [
    <BodyText key="1">
      Een open trap voegt charme en licht toe aan uw woning, maar soms is een update nodig. Wat kunt u van ons
      verwachten? Nieuwe bekleding, zoals tapijt, PVC of andere materialen die passen bij uw stijl. Of kies voor schuren
      en lakken voor een frisse uitstraling zonder grote aanpassingen. Dankzij onze naadloze afwerking behoudt u de
      openheid en het lichte karakter van uw trap. Met vakmanschap zorgen we voor een professionele en duurzame
      oplossing, zodat uw open trap een moderne en strakke eyecatcher blijft!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Open trap',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const OpenTrap = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
