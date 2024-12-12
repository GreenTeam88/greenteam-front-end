import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/droogloopmat',
  imgSrc: '/stofferen/stofferen-6.png',
  paragraphs: [
    <BodyText key="1">
      Een droogloopmat combineert stijl met functionaliteit en is een slimme toevoeging aan uw entree. Hij houdt vuil en
      vocht buiten, waardoor uw interieur schoon blijft, en voegt een stijlvolle touch toe dankzij de vele kleuren en
      designs. Gemaakt van duurzame materialen, is de mat bestand tegen intensief gebruik en gaat hij lang mee. Of u nu
      kiest voor een klassiek of modern design, wij leveren een droogloopmat op maat die perfect aansluit bij uw
      interieur.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Is uw droogloopmat al 10 tot 20 jaar oud? Dan is het tijd om deze te vervangen voor een nieuwe!
    </BodyTextBold>,
  ],
  title: 'Droogloopmat',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const Droogloopmat = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse h-[542px] " {...infoCardConfig} />;
};
