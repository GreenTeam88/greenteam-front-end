import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/tapijt-verwijderen',
  imgSrc: '/stofferen/stofferen-9.png',
  paragraphs: [
    <BodyText key="1">
      Met onze tapijtverwijderingsservice bieden we een efficiënte en grondige aanpak voor een frisse start in uw
      interieur. We verwijderen uw oude tapijt snel en stofvrij, zodat uw woning direct klaar is voor de volgende stap.
      Daarnaast zorgen we voor de ondervloer door deze te reinigen en te egaliseren, zodat deze perfect is voor uw
      nieuwe vloer, of het nu gaat om parket, laminaat, PVC of tegels. Bespaar uzelf het zware werk en laat alles aan
      onze professionals over, zodat u tijd en moeite bespaart.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw tapijt al 10 tot 20 jaar? Dan is het de hoogste tijd om het te verwijderen en plaats te maken voor een
      frisse nieuwe vloer!{' '}
    </BodyTextBold>,
  ],
  title: 'Tapijt verwijderen',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const TapijtVerwijderen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
