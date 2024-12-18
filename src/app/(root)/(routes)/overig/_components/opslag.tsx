import { InfoCardProps, WhiteInfoCard } from '@/components/cards';
import { BodyText, BodyTextBold } from '@/components/theme/typography';

const infoCardConfig: InfoCardProps = {
  buttonText: 'Meer informatie',
  buttonLink: '/overig/opslag',
  imgSrc: '/overig/overig-7.png',
  paragraphs: [
    <BodyText key="1">
      Met onze opslagservice worden uw meubels tijdelijk veilig en overzichtelijk opgeslagen, zodat u zich nergens
      zorgen over hoeft te maken. We helpen u bij het zorgvuldig inpakken en halen uw meubels bij u thuis op, waarna ze
      worden opgeslagen in onze goed beveiligde, geconditioneerde opslagruimte. Alles wordt overzichtelijk en
      toegankelijk opgeslagen, zodat uw spullen snel te vinden zijn. Zodra uw ruimte weer beschikbaar is, bezorgen we uw
      meubels in perfecte staat terug. Onze service biedt niet alleen een veilige plek voor uw spullen, maar ook
      volledige gemoedsrust tijdens een renovatie of verhuizing.
    </BodyText>,
    <BodyTextBold key="2" className="text-secondaryDefault">
      Onze opslagservice bewaart uw spullen veilig en overzichtelijk, zodat u zorgeloos kunt verhuizen of renoveren!{' '}
    </BodyTextBold>,
  ],
  title: 'Opslag',
  secondBtnText: 'Offerte berekenen',
  secondBtnLink: '/offerte',
};

export const Opslag = () => {
  return <WhiteInfoCard className="lg:flex-row-reverse h-[542px]" {...infoCardConfig} />;
};
