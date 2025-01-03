import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-cire/brut',
  imgSrc: '/traprenovatie/traprenovatie-10.png',
  paragraphs: [
    <BodyText key="1">
      Wilt u uw interieur een moderne, industriële upgrade geven? BetonCiré Brut is de perfecte keuze voor een unieke
      afwerking die kracht en verfijning samenbrengt. Dit veelzijdige materiaal is ideaal voor vloeren, wanden en
      meubels en biedt een robuuste, naadloze uitstraling die direct een eigentijdse sfeer creëert. Het is duurzaam,
      slijtvast en perfect geschikt voor intensief gebruikte ruimtes zoals keukens, badkamers en woonkamers. Dankzij de
      waterbestendigheid is het bovendien een uitstekende optie voor natte ruimtes. Of uw stijl nu minimalistisch of
      luxueus is, BetonCiré Brut past altijd. Creëer een tijdloze, luxe look en combineer stijl met functionaliteit in
      uw woning.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Brut',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonBrut = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
