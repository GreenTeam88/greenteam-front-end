'use client';

import React from 'react';

import { appConfig } from '@/config';
import { InstagramLogo, TikTokIcon } from '../icons/homePageIcons';
import { BodyText, BodyTextBold, BodyTextSemibold, HeadlineSemibold } from '../theme/typography';

interface LinkInfo {
  name: string;
  path: string;
}

interface FooterColumnInfo {
  title: string;
  links: LinkInfo[];
}

const topFooterLinks: LinkInfo[] = [
  { name: 'Home', path: '/' },
  { name: 'Over ons', path: '/' },
  { name: 'Diensten', path: '/' },
  { name: 'Zakelijk', path: '/' },
  { name: 'Veelgestelde vragen', path: '/' },
  { name: 'Contact', path: '/' },
];
const footerColumnsInfo: FooterColumnInfo[] = [
  {
    title: 'Traprenovaties',
    links: [
      { name: 'Bekleden met PVC', path: '' },
      { name: 'Bekleden met laminaat', path: '' },
      { name: 'Bekleden met hout', path: '' },
      { name: 'Bekleden met tapijt', path: '' },
      { name: 'Bekleden met linoleum', path: '' },
      { name: 'Schuren en behandelen', path: '' },
      { name: 'Schuren en schilderen', path: '' },
      { name: 'Hout look', path: '' },
      { name: 'Beton look', path: '' },
      { name: 'Marmer look', path: '' },
      { name: 'Cement look', path: '' },
      { name: 'Staal look', path: '' },
      { name: 'BetonCiré Metal stuc', path: '' },
      { name: 'BetonCiré Glamour stuc', path: '' },
      { name: 'BetonCiré Brut', path: '' },
      { name: 'BetonCiré Parel', path: '' },
      { name: 'BetonCiré Croco', path: '' },
      { name: 'BetonCiré Venetiaans', path: '' },
      { name: 'BetonCiré Acoustic', path: '' },
      { name: '', path: '' },
      { name: 'Open trap', path: '' },
      { name: 'Dichte trap', path: '' },
      { name: 'Verlichting', path: '' },
      { name: 'Tapijt verwijderen', path: '' },
    ],
  },
  {
    title: 'Tegelen',
    links: [
      { name: 'Vloer', path: '' },
      { name: 'Wand', path: '' },
      { name: 'Badkamer', path: '' },
      { name: 'Betonlook', path: '' },
      { name: 'Houtlook', path: '' },
      { name: 'Visgraat', path: '' },
      { name: 'Portugees', path: '' },
      { name: 'Marokkaans', path: '' },
      { name: 'Marmer', path: '' },
      { name: 'Keramisch', path: '' },
      { name: 'Hexagon', path: '' },
    ],
  },
  {
    title: 'Vloeren leggen',
    links: [
      { name: 'Parket leggen', path: '' },
      { name: 'Laminaat leggen', path: '' },
      { name: 'PVC leggen', path: '' },
      { name: 'Tapijt leggen', path: '' },
      { name: 'Linoleum leggen', path: '' },
      { name: 'Visgraat', path: '' },
      { name: 'Walvisgraat', path: '' },
      { name: 'Hongaarse punt', path: '' },
      { name: 'Weense punt', path: '' },
      { name: 'Tegel', path: '' },
      { name: 'Mozaïk of patroon', path: '' },
      { name: 'Hexagon & 3D', path: '' },
      { name: 'Tapis', path: '' },
      { name: 'Bourgogne', path: '' },
    ],
  },
  {
    title: 'Vloer verwijderen',
    links: [
      { name: 'Parket', path: '' },
      { name: 'PVC', path: '' },
      { name: 'Hout', path: '' },
      { name: 'Linoleum', path: '' },
      { name: 'Kurk', path: '' },
      { name: 'Tegels', path: '' },
      { name: 'Marmer', path: '' },
      { name: 'Graniet', path: '' },
      { name: 'Lijmesten', path: '' },
      { name: 'Vinyl', path: '' },
      { name: 'Zandcement dekvloer', path: '' },
    ],
  },
  {
    title: 'Gietvloeren',
    links: [
      { name: 'Epoxy', path: '' },
      { name: 'PU', path: '' },
      { name: 'Woonbeton', path: '' },
      { name: 'Beton', path: '' },
      { name: 'BetonCiré', path: '' },
    ],
  },
  {
    title: 'Parket renovatie',
    links: [
      { name: 'Schuren en polijsten', path: '' },
      { name: 'Schuren en lakken', path: '' },
      { name: 'Schuren en olien', path: '' },
      { name: 'Schuren en hardwaxen', path: '' },
      { name: 'Aanhelen', path: '' },
      { name: 'Reparatie', path: '' },
      { name: 'Drevelen', path: '' },
      { name: 'V-groef frezen', path: '' },
      { name: 'Plinten & Deklijsten', path: '' },
    ],
  },
  {
    title: 'Natuursteen behandelen',
    links: [
      { name: 'Marmer', path: '' },
      { name: 'Hardsteen', path: '' },
      { name: 'Travertin', path: '' },
      { name: 'Leisteen', path: '' },
      { name: 'Graniet', path: '' },
      { name: 'Granito', path: '' },
      { name: 'Terrazzo', path: '' },
      { name: 'Natuursteen', path: '' },
      { name: 'Basalt', path: '' },
    ],
  },
  {
    title: 'Stofferen',
    links: [
      { name: 'Trap', path: '' },
      { name: 'Vloer', path: '' },
      { name: 'Tapijttegels', path: '' },
      { name: 'Meubels', path: '' },
      { name: 'Deurmat', path: '' },
      { name: 'Droogloopmat', path: '' },
      { name: 'Rode loper', path: '' },
      { name: 'Reinigingsservice', path: '' },
    ],
  },
  {
    title: 'Overig',
    links: [
      { name: 'Vloerverwarming', path: '' },
      { name: 'Egaliseren', path: '' },
      { name: 'Gietvloeren', path: '' },
      { name: 'Tegelen', path: '' },
      { name: 'Vloer verwijderen', path: '' },
      { name: 'Natuursteen behandelen', path: '' },
      { name: 'Opslag      ', path: '' },
    ],
  },
  {
    title: 'Mogelijke locaties',
    links: [
      { name: 'Badkamer', path: '' },
      { name: 'Woonkamer', path: '' },
      { name: 'Horecavloer', path: '' },
      { name: 'Sportvloer', path: '' },
      { name: 'Winkelvloer', path: '' },
      { name: 'Bedrijfsvloer', path: '' },
      { name: 'Bedrijfshal', path: '' },
      { name: 'Muren', path: '' },
    ],
  },
];

export const FooterColumn: React.FC<FooterColumnInfo> = ({ title, links }) => {
  return (
    <div className="flex flex-col w-[183px]  gap-[10px] ">
      <BodyTextBold className="text-primaryDefault">{title}</BodyTextBold>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <BodyText key={link.name}>{link.name}</BodyText>
        ))}
      </div>
    </div>
  );
};

export const FooterTopSection = () => {
  return (
    <div className="flex items-center justify-between">
      <img src={appConfig.logoSrcImg} />
      <div className="flex gap-4 px-6">
        {topFooterLinks.map((link) => (
          <HeadlineSemibold key={link.name}>{link.name}</HeadlineSemibold>
        ))}
        <div className="flex gap-[22px]  px-6">
          <div className="cursor-pointer" onClick={() => window.open(appConfig.instagramAccount, '_blank')}>
            <InstagramLogo />
          </div>
          <div className="cursor-pointer" onClick={() => window.open(appConfig.tiktokAccount, '_blank')}>
            <TikTokIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterLightBorder = () => <div className="bg-black20 h-[1px] bg-opacity-20 w-full "></div>;

const FooterColumns = () => {
  return (
    <div className="flex flex-col gap-[44px] w-full">
      <div className="flex gap-[71px] ">
        {footerColumnsInfo.slice(0, 5).map((columnInfo) => (
          <FooterColumn key={columnInfo.title} {...columnInfo} />
        ))}
      </div>
      <div className="flex gap-[71px] ">
        {footerColumnsInfo.slice(5).map((columnInfo) => (
          <FooterColumn {...columnInfo} key={columnInfo.title} />
        ))}
      </div>
    </div>
  );
};

const FooterBottomSection = () => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <BodyTextBold>Openingstijden</BodyTextBold>
        <div className="flex gap-[15px] ">
          {appConfig.openingTimes.map((openingTime) => (
            <div className="flex gap-2" key={openingTime.day}>
              <BodyTextSemibold>{openingTime.day}:</BodyTextSemibold>
              <BodyText>{openingTime.time}</BodyText>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <BodyTextBold className="text-primaryDefault">
          GreenTeam is ontwikkeld door{' '}
          <a href="www.achieve.nl" target="_blank">
            Achieve.nl
          </a>
          © 2024.
        </BodyTextBold>
        <BodyTextSemibold className="text-primaryDefault">
          <a href="https://www.greenteam.nl/algemenevoorwaarden">Algemene Voorwaardenㆍ</a>
          <a href="https://www.greenteam.nl/privacypolicy">Privacy Policy</a>
        </BodyTextSemibold>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      {/* footer view for desktop */}
      <div className="hidden lg:flex items-center justify-center w-full bg-lightGray ">
        <div className="flex max-w-[1440px] py-[55px]  px-[120px] w-full flex-col   gap-[44px]">
          <FooterTopSection />
          <FooterLightBorder />
          <FooterColumns />
          <FooterLightBorder />
          <FooterBottomSection />
        </div>
      </div>
    </>
  );
};
