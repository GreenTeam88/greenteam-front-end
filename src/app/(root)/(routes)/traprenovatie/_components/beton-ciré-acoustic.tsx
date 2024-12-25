import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/beton-ciré-acoustic',
  imgSrc: '/traprenovatie/traprenovatie-14.png',
  paragraphs: [
    <BodyText key="1">
      Acoustic BetonCiré is meer dan een vloer – het is een slimme combinatie van stijl en functionaliteit. Met zijn
      strakke, industriële uitstraling en naadloze afwerking geeft het elk interieur een moderne en luxe uitstraling.
      Bovendien biedt het akoestische voordelen door geluid te dempen, wat zorgt voor een rustiger leefklimaat.
      Praktisch en waterbestendig, is dit materiaal ideaal voor drukke huishoudens en vochtige ruimtes, en daarmee de
      perfecte keuze voor wie comfort en esthetiek wil samenbrengen.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Acoustic',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonAcoustic = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
