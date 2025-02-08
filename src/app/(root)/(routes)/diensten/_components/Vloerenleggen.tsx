// import { BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, OrangeInfoCard } from './cards';

const config: InfoCardProps = {
  title: 'Vloeren leggen ',
  imgSrc: '/diensten/Vloerenleggen.png',
  buttonText: 'Meer informatie',
  buttonLink: '/traprenovatie',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',

  paragraphs: [
    <>
      Het leggen van een nieuwe vloer is een belangrijke investering die de uitstraling en sfeer van uw woning compleet
      kan veranderen. Of het nu gaat om een stijlvolle PVC-vloer, warme houten vloer of duurzaam laminaat, een
      professioneel gelegde vloer is de basis voor een mooi en comfortabel interieur.
    </>,
    <>
      <span className="text-secondaryDefault"> Vloeren leggen is precisiewerk en vereist vakmanschap.</span> Bij
      GreenTeam zijn we al ruim 20 jaar gespecialiseerd in het leggen van vloeren. Onze ervaren vakmensen hebben
      uitgebreide kennis van verschillende materialen en technieken. Van het egaliseren van de ondergrond tot de
      perfecte afwerking, wij zorgen ervoor dat elke vloer strak, naadloos en duurzaam wordt gelegd.
    </>,
    <>
      Bij GreenTeam werken we met hoogwaardige materialen en moderne installatietechnieken. Wij staan voor kwaliteit en
      duurzaamheid, zodat uw nieuwe vloer jarenlang meegaat en tegen een stootje kan. Of u nu kiest voor een designvloer
      of een klassieke houten vloer, u kunt rekenen op een perfect eindresultaat.
    </>,
    <>
      Met GreenTeam kies u niet alleen voor vakmanschap, maar ook voor een betrouwbare partner. Wij helpen u graag bij
      het creëren van een vloer die past bij uw wensen én uw interieur.
    </>,
  ],
};

export const Vloerenleggen = () => {
  return <OrangeInfoCard {...config} />;
};
