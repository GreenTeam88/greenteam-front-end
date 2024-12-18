import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/meubels',

  imgSrc: '/stofferen/stofferen-4.png',
  paragraphs: [
    <BodyText key="1">
      Met onze meubelstoffering geven we uw meubels een tweede leven en maken we ze opnieuw tot de blikvangers van uw
      interieur. We starten met een grondige inspectie en geven advies op maat. Eventuele gebreken worden vakkundig
      hersteld, waarna we uw meubels opnieuw bekleden met zorgvuldig gekozen stoffen die perfect passen bij uw stijl.
      Onze experts zorgen voor een strakke afwerking en, indien gewenst, een grondige reiniging voor een fris
      eindresultaat. Geef uw meubels een nieuwe look én nieuw leven met onze professionele meubelstoffering!{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Is uw meubelstoffering al 10 tot 20 jaar oud? Dan wordt het tijd voor een frisse vernieuwing!{' '}
    </BodyTextBold>,
  ],
  title: 'Meubels',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte',
};

export const Meubels = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
