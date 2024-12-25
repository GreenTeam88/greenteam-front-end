import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovaties/beton-ciré-venetiaans',
  imgSrc: '/traprenovaties/traprenovaties-13.png',
  paragraphs: [
    <BodyText key="1">
      Breng de klassieke elegantie van Italiaanse interieurs in uw woning met Beton Cire Venetiaans. Dit exclusieve
      materiaal combineert een verfijnde, marmerachtige uitstraling met een naadloze afwerking, en biedt een perfecte
      balans tussen luxe en functionaliteit. Met zijn tijdloze charme is het ideaal voor vloeren, wanden en meubels in
      badkamers, keukens en woonkamers. Beton Cire Venetiaans is niet alleen veelzijdig toepasbaar, maar ook duurzaam en
      waterbestendig, waardoor het bestand is tegen slijtage en vocht. Creëer een stijlvolle ambiance waarin esthetiek
      en gebruiksgemak harmonieus samenkomen.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Beton Ciré Venetiaans',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BetonVenetiaans = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
