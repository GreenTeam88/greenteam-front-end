import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie/schuren-en-schilderen',
  imgSrc: '/traprenovatie/traprenovatie-7.png',
  paragraphs: [
    <BodyText key="1">
      Onze schuur- en behandelingsservice brengt uw trap terug in topconditie. We beginnen met grondig schuren, zodat uw
      trap een glad, egaal oppervlak krijgt, klaar voor de volgende stap. Daarna behandelen we de trap professioneel met
      een olie- of laklaag van hoge kwaliteit, die zowel beschermt als een nieuwe uitstraling geeft. Of u nu kiest voor
      een moderne, kleurrijke look of een tijdloze, klassieke afwerking, wij zorgen voor een perfecte match met uw
      interieur. Dankzij onze duurzame afwerking blijft uw trap jarenlang mooi en in topstaat.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt uw trap er al 10 tot 20 jaar, dan is het tijd om deze een nieuwe uitstraling te geven!{' '}
    </BodyTextBold>,
  ],
  title: 'Schuren en schilderen',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const SchurenSchilderen = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
