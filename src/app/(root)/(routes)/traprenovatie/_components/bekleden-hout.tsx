import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/bekleden-met-hout',
  imgSrc: '/traprenovatie/traprenovatie-3.png',
  paragraphs: [
    <BodyText key="1">
      Onze trapbekleding van hoogwaardig hout tilt uw interieur naar een hoger niveau. Kies uit een breed scala aan
      houtsoorten, van klassiek eiken tot modern walnoot, en geef uw trap een karaktervolle uitstraling die uw woning
      doet stralen. Hout combineert natuurlijke schoonheid met duurzaamheid, waardoor uw trap jarenlang meegaat. Wij
      zorgen voor een perfecte, naadloze afwerking die volledig is afgestemd op uw interieurstijl. Met ons vakmanschap
      wordt uw trap een echte blikvanger, passend bij uw unieke smaak en stijl.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven
    </BodyTextBold>,
  ],
  title: 'Bekleden met hout',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BekledenHout = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
