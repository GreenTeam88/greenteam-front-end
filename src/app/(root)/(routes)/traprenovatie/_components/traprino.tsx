import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold, H2 } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/bekleden-met-pvc',
  imgSrc: '/traprenovatie/traprenovatie-1.png',
  paragraphs: [
    <BodyText key="1">
      PVC trapbekleding is de perfecte keuze voor een trap die zowel mooi als functioneel moet zijn. Met een ruime keuze
      aan designs, waaronder diverse kleuren en texturen, kunt u uw trap een moderne en persoonlijke uitstraling geven.
      PVC is slijtvast en duurzaam, bestand tegen intensief gebruik en blijft jarenlang mooi. Het onderhoud is
      eenvoudig, wat het ideaal maakt voor drukke huishoudens, en de geluidsdempende eigenschappen zorgen voor meer rust
      in huis. Ons professionele team zorgt bovendien voor een naadloze installatie, zodat uw trap er weer als nieuw
      uitziet.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Bekleden met PVC',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Traprenovaties = () => {
  return (
    <div className="flex flex-col gap-20  py-28 bg-white  relative z-0 items-center w-full">
      <div className="flex flex-col gap-[11px] items-center">
        <H2 className="text-primaryDefault">Traprenovaties</H2>
        <BodyText className="text-black">Stapsgewijs naar een perfect resultaat</BodyText>
      </div>
      <WhiteInfoCard className="lg:flex-row-reverse" {...infoCardConfig} />
    </div>
  );
};
