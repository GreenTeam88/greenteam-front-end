import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-cire/metal-stuc',
  imgSrc: '/traprenovatie/traprenovatie-8.png',
  paragraphs: [
    <BodyText key="1">
      Op zoek naar een interieur dat opvalt? BetonCiré Metal Stuc combineert de robuuste, naadloze look van BetonCiré
      met een verfijnde metallic finish, perfect voor een moderne en industriële sfeer. Dit unieke materiaal biedt een
      exclusieve uitstraling met een opvallende metaalglans die elke ruimte een eigentijdse touch geeft. Het is
      veelzijdig toepasbaar op accentmuren, vloeren en meubels in keukens, badkamers en woonkamers. Bovendien is het
      duurzaam en waterbestendig, waardoor het zowel stijlvol als praktisch is. Creëer een trendy, industriële sfeer
      zonder in te leveren op functionaliteit.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Metal stuc',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonMetal = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
