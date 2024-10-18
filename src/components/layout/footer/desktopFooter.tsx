'use client';

import Link from 'next/link';
import React from 'react';

import { appConfig } from '@/config';
import { InstagramLogo, TikTokIcon } from '../../icons/homePageIcons';
import { BodyText, BodyTextBold, BodyTextSemibold, HeadlineSemiboldLink } from '../../theme/typography';
import { FooterColumnInfo, footerColumnsInfo, topFooterLinks } from './footerConfig';

export const FooterColumn: React.FC<FooterColumnInfo> = ({ title, links }) => {
  return (
    <div className="flex flex-col w-[183px]  gap-[10px] ">
      <BodyTextBold className="text-primaryDefault">{title}</BodyTextBold>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <BodyText className="hover:text-primaryDefault cursor-pointer" key={link.name}>
            {link.name}
          </BodyText>
        ))}
      </div>
    </div>
  );
};

export const FooterTopSection = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <img src={appConfig.logoSrcImg} />
      </Link>
      <div className="flex gap-4 px-6">
        {topFooterLinks.map((link) => (
          <HeadlineSemiboldLink href={link.path} className="hover:text-primaryDefault" key={link.name}>
            {link.name}
          </HeadlineSemiboldLink>
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

export const FooterLightBorder = () => <div className="bg-black20 h-[1px] bg-opacity-20 w-full "></div>;

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
          <a href="www.achieve.nl" className="hover:text-secondaryDefault" target="_blank">
            Achieve.nl
          </a>
          © 2024.
        </BodyTextBold>
        <BodyTextSemibold className="text-primaryDefault">
          <Link href="/algemenevoorwaarden">Algemene Voorwaardenㆍ</Link>
          <Link href="/privacypolicy">Privacy Policy</Link>
        </BodyTextSemibold>
      </div>
    </>
  );
};

export const DesktopFooter = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-full bg-lightGray ">
      <div className="flex max-w-[1440px] py-[55px]  px-[120px] w-full flex-col   gap-[44px]">
        <FooterTopSection />
        <FooterLightBorder />
        <FooterColumns />
        <FooterLightBorder />
        <FooterBottomSection />
      </div>
    </div>
  );
};
