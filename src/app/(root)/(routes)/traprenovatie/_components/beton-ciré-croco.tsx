import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-cire/croco',
  imgSrc: '/traprenovatie/traprenovatie-12.png',
  paragraphs: [
    <BodyText key="1">
      Bent u op zoek naar een interieurafwerking die indruk maakt? BetonCiré Croco combineert de ruwe kracht van beton
      met de elegante textuur van krokodillenleer en biedt een luxueuze uitstraling, waterbestendigheid en duurzaamheid
      – ideaal voor keukens, badkamers en stijlvolle accentmuren. Met zijn gedurfde elegantie en naadloze perfectie
      trekt het meteen de aandacht en tilt het uw interieur naar een hoger niveau. Creëer een unieke, stijlvolle
      ambiance met BetonCiré Croco: de perfecte keuze voor wie houdt van luxe en originaliteit!
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Croco',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonCroco = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
