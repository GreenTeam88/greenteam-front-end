import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/bekleden-met-laminaat',
  imgSrc: '/traprenovatie/traprenovatie-2.png',
  paragraphs: [
    <BodyText key="1">
      Geef uw trap een nieuwe look met laminaat, de ideale keuze voor wie stijl, functionaliteit en betaalbaarheid
      zoekt. Laminaat biedt een ruime keuze aan veelzijdige designs, van een klassieke houtlook tot moderne patronen,
      zodat het perfect bij elk interieur past. Het is duurzaam, bestand tegen slijtage en dagelijks gebruik, waardoor
      het jarenlang mooi blijft. Bovendien is laminaat eenvoudig schoon te maken en te onderhouden, wat het ideaal maakt
      voor drukke huishoudens. Onze experts zorgen voor een strakke, naadloze afwerking die indruk maakt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Bekleden met laminaat',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BekledenLaminaat = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
