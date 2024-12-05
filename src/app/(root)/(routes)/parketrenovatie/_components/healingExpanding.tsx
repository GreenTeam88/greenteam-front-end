import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { InfoCardProps, WhiteInfoCard } from '../../diensten/_components/cards';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/parketrenovatie/aanhelen-uitbreiden',
  imgSrc: '/Parketrenovatie/fifthFloor.png',
  paragraphs: [
    <BodyText key="1">
      Bij een verbouwing kan het gebeuren dat uw vloer onaf lijkt, bijvoorbeeld na het verwijderen van een muur of het
      plaatsen van een aanbouw. Wij vullen ontbrekende delen aan, zodat uw vloer weer een geheel vormt. Onze specialist
      komt bij u langs om de houtsoort en plank afmetingen vast te stellen, zodat we perfect bijpassend hout kunnen
      bestellen en uw vloer naadloos kunnen uitbreiden.{' '}
    </BodyText>,
    <BodyText>
      Om het nieuwe deel volledig te laten aansluiten bij het bestaande, schuren en behandelen we de hele vloer na de
      uitbreiding. Zo krijgen zowel de oude als nieuwe delen dezelfde kleur en afwerking, waardoor uw vloer eruit ziet
      als één prachtig, uniform geheel.{' '}
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Ligt jouw vloer er al 10 tot 20 jaar dan is het de hoogste tijd om daar wat aan te doen!{' '}
    </BodyTextBold>,
  ],
  title: 'Schuren en polijsten',
  secondBtnText: 'Direct offerte berekenen',
  secondBtnLink: '/offerte-aanvragen',
};

export const HealingExpanding = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
