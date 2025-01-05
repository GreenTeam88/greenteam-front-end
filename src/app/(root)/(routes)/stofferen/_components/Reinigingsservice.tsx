import { InfoCardProps, OrangeInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/stofferen/reinigingsservice',

  imgSrc: '/stofferen/stofferen-8.png',
  paragraphs: [
    <BodyText key="1">
      Met onze professionele reinigingsservice krijgt uw tapijt de zorg en aandacht die het verdient. Dankzij
      dieptereiniging verwijderen we vuil, vlekken en allergenen uit de vezels, terwijl stoomreiniging zorgt voor een
      grondige en hygiënische schoonmaak van tapijt, vloerkleden en bekleding. We gebruiken hoogwaardige, veilige
      reinigingsproducten en ons team van ervaren specialisten zorgt ervoor dat zelfs de kleinste details worden
      aangepakt. Geniet van een stralend en hygiënisch tapijt, zodat uw interieur weer als nieuw aanvoelt.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Is uw tapijt al 10 tot 20 jaar niet grondig gereinigd? Dan is het de hoogste tijd om onze reinigingsservice in te
      schakelen!{' '}
    </BodyTextBold>,
  ],
  title: 'Reinigingsservice',
  secondBtnText: 'Offerte aanvragen',
  secondBtnLink: '/offerte',
};

export const Reinigingsservice = () => {
  return <OrangeInfoCard className="lg:flex-row-reverse lg:h-[542px] " {...infoCardConfig} />;
};
