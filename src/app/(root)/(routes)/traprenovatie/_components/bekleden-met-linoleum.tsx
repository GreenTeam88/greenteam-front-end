import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/bekleden-linoleum',
  imgSrc: '/traprenovatie/traprenovatie-5.png',
  paragraphs: [
    <BodyText key="1">
      Linoleum is de perfecte keuze voor een trap die duurzaamheid, veiligheid en stijl combineert. Het is ecologisch
      verantwoord, gemaakt van natuurlijke materialen zoals lijnolie, harsen en houtmeel. Linoleum is ook duurzaam,
      bestand tegen slijtage en eenvoudig te onderhouden, waardoor het ideaal is voor drukke huishoudens. Dankzij de
      uitstekende grip biedt linoleum extra veiligheid, waardoor het een perfecte optie is voor dagelijks gebruik.
      Bovendien kunt u uit een breed scala aan kleuren en patronen kiezen, zodat uw trap perfect aansluit bij uw
      interieur.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Bekleden met linoleum',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const BekledenLinoleum = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
