import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/rode-loper',
  imgSrc: '/stofferen/stofferen-7.png',
  paragraphs: [
    <BodyText key="1">
      Wilt u indruk maken met een stijlvolle entree? Onze rode lopers voegen direct een vleugje glamour en elegantie toe
      aan elke gelegenheid, of het nu gaat om speciale evenementen, feesten, of gewoon om uw dagelijkse interieur een
      luxueuze uitstraling te geven. Met hun onmiskenbare stijl creëren ze een chique entree die de toon zet voor uw
      ruimte, terwijl de hoogwaardige, duurzame materialen zorgen voor comfort en een lange levensduur. Dankzij hun
      veelzijdigheid en eenvoudige combinatie met elke inrichting zijn ze perfect voor zowel feestelijke momenten als
      een dagelijkse upgrade. Maak van uw ruimte een echte eyecatcher met een rode loper die klasse en verfijning
      uitstraalt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Is uw rode loper 10 tot 20 jaar oud? Dan is het tijd om deze te vervangen voor een nieuwe!{' '}
    </BodyTextBold>,
  ],
  title: 'Rode loper',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Rodeloper = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
