'use client';

import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react';

import { appConfig } from '@/config';
import { cn } from '@/lib/tailwind';
import { InstagramLogo, TikTokIcon } from '../icons/homePageIcons';

// types needed for the header

// a simple route with a path
interface RouteWithPath {
  name: string;
  path: string;
}

// information about  a column in the header menu when hovering for a link
type HeaderColumnInfo = { title: string; subPages: (RouteWithPath | { name: string; subPages: RouteWithPath[] })[] };

// in the header , there is some routes that displays a menu with a list of subpages  when hovering
interface RouteWithSubpages {
  name: string;
  columns: HeaderColumnInfo[];
}

// a link can either display subPages in the menu or it can have a direct path to a certain page
type HeaderRoute = RouteWithPath | RouteWithSubpages;

// all the routes for the header with all the menu and columns info
const headerRoutes: HeaderRoute[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Over ons',
    columns: [
      {
        title: 'Parket renovatie',
        subPages: [
          { name: 'Schuren en polijsten', path: '' },
          { name: 'Schuren en lakken', path: '' },
          { name: 'Schuren en olien', path: '' },
          { name: 'Schuren en hardwaxen', path: '' },
          { name: 'Aanhelen', path: '' },
          { name: 'Uitbreiden', path: '' },
          { name: 'Reparatie', path: '' },
          { name: 'Drevelen', path: '' },
          { name: 'V-groef frezen', path: '' },
          { name: 'Plinten & Deklijsten', path: '' },
        ],
      },

      {
        title: 'Vloeren leggen',
        subPages: [
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
        title: 'Traprenovaties',
        subPages: [
          { name: 'Bekleden met PVC', path: '' },
          { name: 'Bekleden met laminaat', path: '' },
          { name: 'Bekleden met hout', path: '' },
          { name: 'Bekleden met tapijt', path: '' },
          { name: 'Bekleden met linoleum', path: '' },
          { name: 'Schuren en behandelen', path: '' },
          { name: 'Schuren en schilderen', path: '' },
          {
            name: 'BetonCiré',
            subPages: [
              { name: 'BetonCiré Metal stuc', path: '' },
              { name: 'BetonCiré Glamour stuc', path: '' },
              { name: 'BetonCiré Brut', path: '' },
              { name: 'BetonCiré Parel', path: '' },
              { name: 'BetonCiré Croco', path: '' },
              { name: 'BetonCiré Venetiaans', path: '' },
              { name: 'BetonCiré Acoustic', path: '' },
            ],
          },
          { name: 'Open trap', path: '' },
          { name: 'Dichte trap', path: '' },
          { name: 'Verlichting', path: '' },
        ],
      },
      {
        title: 'Stofferen',
        subPages: [
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
        subPages: [
          { name: 'Vloerverwarming', path: '' },
          { name: 'Egaliseren', path: '' },
          { name: 'Gietvloeren', path: '' },
          { name: 'Tegelen', path: '' },
          { name: 'Vloer verwijderen', path: '' },
          { name: 'Natuursteen behandelen', path: '' },
          { name: 'Opslag      ', path: '' },
        ],
      },
    ],
  },
  {
    name: 'Diensten',
    columns: [],
  },
  {
    name: 'Zakelijk',
    path: '/',
  },
  {
    name: 'Veelgestelde vragen',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/',
  },
  {
    name: 'Parketrenovatie',
    columns: [],
  },
  {
    name: 'Traprenovaties',
    columns: [],
  },
  {
    name: 'Vloeren leggen',
    columns: [],
  },
  {
    name: 'Stofferen',
    columns: [],
  },
  {
    name: 'Overig',
    columns: [],
  },
];

// a single item in a colmun in the menu (the menu that apears when we hover over a certain link)
const HeaderColumnItem: React.FC<
  | RouteWithPath
  | {
      name: string;
      subPages: RouteWithPath[];
    }
> = (subPage) => {
  const [isOpened, setIsOpened] = useState(false);
  const hasSubPages = 'subPages' in subPage && subPage.subPages.length;
  return (
    <div className="flex flex-col">
      <h5
        key={subPage.name}
        onClick={() => setIsOpened((val) => !val)}
        className="text-sm hover:text-primaryDefault cursor-pointer"
      >
        {subPage.name}
        {hasSubPages && <img src="/icons/dropDown.svg" className={cn('mx-2 inline', { 'rotate-180': isOpened })} />}
      </h5>
      {'subPages' in subPage && isOpened && (
        <div className="flex flex-col pl-3">
          {'subPages' in subPage &&
            subPage.subPages &&
            subPage.subPages.map((item) => (
              <h5 key={subPage.name} className="text-sm font-semibold hover:text-primaryDefault cursor-pointer">
                {item.name}
              </h5>
            ))}
        </div>
      )}
    </div>
  );
};

// a column in the menu (when hovering over a certain link)

const HeaderColumn: React.FC<HeaderColumnInfo & { index: number }> = ({ subPages, title }) => {
  return (
    <>
      <div className="flex flex-col gap-[11px]">
        <h5 className="text-sm font-semibold text-primaryDefault">{title}</h5>
        <div className="flex flex-col gap-1">
          {subPages.map((subPage) => (
            <HeaderColumnItem key={subPage.name} {...subPage} />
          ))}
        </div>
      </div>
    </>
  );
};

// the menu that apears when hovering over a certain link
const HeaderColumns: React.FC<{ hoveredLink: string }> = ({ hoveredLink }) => {
  const hoveredRoute = headerRoutes.find((route) => route.name === hoveredLink);
  const hoveredRouteColumns = hoveredRoute && 'columns' in hoveredRoute && hoveredRoute.columns;
  if (!hoveredRouteColumns) return null;
  return (
    <div className="flex gap-[33px] py-[22px] px-[44px]">
      {hoveredRouteColumns.map((column, index) => (
        <HeaderColumn key={column.title} {...column} index={index} />
      ))}
    </div>
  );
};

// the top section of the header that includes logo and social links
export const HeaderTopSection = () => {
  return (
    <div className="flex w-[1201px] items-center justify-between">
      <img src={appConfig.logoSrcImg} />
      <div className="flex items-center min-w-[633px] p-[10px] justify-around">
        {/* <div className="bg-[#37CD76] w-[15.32px] h-[16px] rounded-full"></div> */}
        <motion.div
          className=" w-[15.32px] h-[16px] rounded-full"
          initial={{ backgroundColor: '#217946' }}
          animate={{
            backgroundColor: ['#37CD76', '#217946'],
            transition: { duration: 3, ease: 'easeIn', repeat: Infinity },
          }}
        ></motion.div>
        <p className="font-semibold text-[22px] text-primaryGreenD1"> Liever iemand spreken? Bel 085 401 93 45</p>
        <div className="flex gap-[22px]">
          <div className="cursor-pointer" onClick={() => window.open(appConfig.instagramAccount, '_blank')}>
            <InstagramLogo />
          </div>
          <div className="cursor-pointer" onClick={() => window.open(appConfig.tiktokAccount, '_blank')}>
            <TikTokIcon />
          </div>
        </div>
      </div>
      {/* removing secondary button default hovering */}
      <button className="secondaryBtn hover:bg-secondaryDefault hover:text-white hover:border-none">
        Offerte aanvragen
      </button>
    </div>
  );
};

// a link inside the header in the first row (bold links)
export const HeaderBoldLink: React.FC<{
  route: HeaderRoute;
  hoveredLink: string;
  index: number;
  setHoveredLink: Dispatch<SetStateAction<string>>;
}> = ({ route, index, hoveredLink, setHoveredLink }) => {
  return (
    <>
      <div
        onMouseOver={() => !hoveredLink && setHoveredLink(route.name)}
        className={cn('flex  items-center  cursor-pointer', { 'text-primaryDefault': hoveredLink === route.name })}
      >
        <h5 className="font-bold text-[16px]">
          {route.name}
          {'columns' in route && route.columns && <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />}
        </h5>
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== 5 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

// a link in the header in the second row (non bold link)
export const HeaderLink: React.FC<{
  route: HeaderRoute;
  index: number;
  hoveredLink: string;
  setHoveredLink: Dispatch<SetStateAction<string>>;
}> = ({ route, index, hoveredLink, setHoveredLink }) => {
  return (
    <>
      <div onMouseOver={() => !hoveredLink && setHoveredLink(route.name)} className="flex  items-center cursor-pointer">
        <h5 className={cn('text-[16px]', { 'text-primaryDefault': hoveredLink === route.name })}>
          {route.name}
          {'columns' in route && route.columns && <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />}
        </h5>
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== headerRoutes.length - 7 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

// all the links of the header including the first row (bold links) and the second row (non bold links)
export const HeaderLinksSection = () => {
  const [hoveredLink, setHoveredLink] = useState('');
  const hoveredLinkRouteIndex = headerRoutes.findIndex((route) => route.name === hoveredLink);
  return (
    <div
      onMouseLeave={() => setHoveredLink('')}
      className="flex flex-col items-center  gap-[39px] relative  justify-center "
    >
      <div className="flex gap-[33px] items-center ">
        {headerRoutes.slice(0, 6).map((route, index) => (
          <HeaderBoldLink
            hoveredLink={hoveredLink}
            key={route.name}
            index={index}
            route={route}
            setHoveredLink={setHoveredLink}
          />
        ))}
      </div>
      <div className="flex gap-[50px] items-center">
        {headerRoutes.slice(6).map((route, index) => (
          <HeaderLink
            hoveredLink={hoveredLink}
            route={route}
            key={route.name}
            index={index}
            setHoveredLink={setHoveredLink}
          />
        ))}
      </div>
      {hoveredLink && (
        // the top is 30px if the hovered link at the first row (bold)
        // the top is 88px if the hovered link at the second row
        <div
          className={cn('absolute  z-10 border rounded-[10px] border-black20 border-opacity-20  w-full bg-white ', {
            'top-[88px]': hoveredLinkRouteIndex > 5,
            'top-[30px]': hoveredLinkRouteIndex <= 5,
          })}
        >
          <HeaderColumns hoveredLink={hoveredLink}></HeaderColumns>
        </div>
      )}
    </div>
  );
};

// the header element
export const Header = () => {
  return (
    <>
      {/* header for desktop view */}
      <div className="hidden lg:flex sticky w-full  flex-col top-0 z-30 gap-[39px]  py-6 items-center bg-white">
        <HeaderTopSection />
        <HeaderLinksSection />
      </div>
    </>
  );
};
