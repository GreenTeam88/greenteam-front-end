import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/natuursteen-behandelen',
  imgSrc: '/overig/overig-6.png',
  paragraphs: [
    <BodyText key="1">
      Met onze natuursteenbehandeling krijgt uw vloer weer een luxe en frisse uitstraling. We starten met een grondige
      reiniging om hardnekkige vlekken en vuil te verwijderen, herstellen oppervlakkige krassen door polijsten en
      brengen een beschermlaag aan tegen slijtage en vlekken. Of u nu kiest voor een matte, zijdeachtige of
      hoogglanzende afwerking, wij accentueren de natuurlijke glans van het steen. Geschikt voor alle soorten
      natuursteen, zoals marmer, graniet of travertijn, zorgt onze behandeling ervoor dat uw vloer er weer als nieuw
      uitziet en lang meegaat.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Natuursteen behandelen',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const NatuursteenBehandelen = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
