'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { DropDownIcon } from '@/components/icons/arrows';
import { InstagramLogo, TikTokIcon } from '@/components/icons/homePageIcons';
import { BodyText, BodyTextBold, BodyTextSemibold } from '@/components/theme/typography';
import { appConfig } from '@/config';
import { cn } from '@/lib/tailwind';
import { FooterLightBorder } from './desktopFooter';
import { FooterColumnInfo, footerColumnsInfo, topFooterLinks } from './footerConfig';

export const TopSection = () => {
  return (
    <div className="w-full px-2 flex flex-col ">
      <div className="w-full  flex justify-between">
        <img src={appConfig.logoSrcImg} width={100} />
        <div className="flex gap-4">
          <InstagramLogo width={25} height={25} />

          <TikTokIcon width={20} height={20} />
        </div>
      </div>
      <div className="flex py-4 flex-col">
        {topFooterLinks.map((link) => (
          <Link href={link.path} key={link.name} className="text-lg  font-semibold">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterColumn: React.FC<FooterColumnInfo> = ({ links, title }) => {
  const [isColumnOpen, setIsColumnOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <h3 className="text-lg flex items-center font-semibold" onClick={() => setIsColumnOpen((val) => !val)}>
        {title}{' '}
        <span className={cn('inline mx-2', { 'rotate-180': isColumnOpen })}>
          <DropDownIcon />
        </span>{' '}
      </h3>
      {isColumnOpen && (
        <div className="flex flex-col px-2">
          {links.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Columns = () => {
  return (
    <div className="flex flex-col px-3 py-4 ">
      {footerColumnsInfo.map((column) => (
        <FooterColumn key={column.title} {...column} />
      ))}
    </div>
  );
};

export const BottomSection = () => {
  return (
    <div className="flex px-3 py-5 flex-col">
      <BodyTextBold>Openingstijden</BodyTextBold>
      {appConfig.openingTimes.map((openingTime) => (
        <div key={openingTime.day} className="flex gap-1">
          <BodyTextBold>{openingTime.day}</BodyTextBold>
          <BodyText>{openingTime.time}</BodyText>
        </div>
      ))}
      <div className="flex py-4 flex-col gap-2">
        <BodyTextBold className="text-primaryDefault">
          GreenTeam is ontwikkeld door{' '}
          <a href="www.achieve.nl" target="_blank">
            Achieve.nl
          </a>
          © 2024.
        </BodyTextBold>
        <BodyTextSemibold className="text-primaryDefault">
          <Link href="/algemene-voorwaarden" className="hover:text-primaryDefault">
            Algemene Voorwaardenㆍ
          </Link>
          <Link href="/privacynpm-rupolicy">Privacy Policy</Link>
        </BodyTextSemibold>
      </div>
    </div>
  );
};

export const MobileFooter = () => {
  return (
    <div className="flex py-7 lg:hidden flex-col w-full">
      <TopSection />
      <FooterLightBorder />
      <Columns />
      <FooterLightBorder />
      <BottomSection />
    </div>
  );
};
