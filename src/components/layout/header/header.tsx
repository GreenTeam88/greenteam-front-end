'use client';

import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { appConfig } from '@/config';
import { cn } from '@/lib/tailwind';
import { DropDownIcon } from '../../icons/arrows';
import { InstagramLogo, TikTokIcon } from '../../icons/homePageIcons';
import { SecondaryBtnLink } from '../../theme/buttons';
import { BodyText } from '../../theme/typography';
import { TitleCarousel } from './titleCrausel';

// types needed for the header

// a simple route with a path
interface RouteWithPath {
  name: string;
  path: string;
}

// information about  a column in the header menu when hovering for a link
type HeaderColumnInfo = {
  title: string;
  link: string;
  subPages: (RouteWithPath | { name: string; subPages: RouteWithPath[] })[];
};

// a link can either display subPages in the menu or it can have a direct path to a certain page
type HeaderRoute = {
  name: string;
  path?: string;
  columns?: HeaderColumnInfo[];
};
// all the routes for the header with all the menu and columns info
const headerRoutes: HeaderRoute[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Over ons',
    path: '/over-ons',
  },
  {
    name: 'Diensten',
    path: '/diensten',
    columns: [
      {
        link: '/parketrenovatie',
        title: 'Parketrenovatie',
        subPages: [
          { name: ' Schuren en polijsten', path: '/parketrenovatie/schuren-en-polijsten' },
          { name: ' Schuren en lakken', path: '/parketrenovatie/schuren-en-lakken' },
          { name: ' Schuren en oliën', path: '/parketrenovatie/schuren-en-olien' },
          { name: ' Schuren en hardwaxen', path: '/parketrenovatie/schuren-en-hardwaxen' },
          { name: ' Aanhelen / Uitbreiden', path: '/parketrenovatie/aanhelen-uitbreiden' },
          { name: ' Reparatie', path: '/parketrenovatie/reparatie' },
          { name: ' Drevelen', path: '/parketrenovatie/drevelen' },
          { name: ' V-groef frezen', path: '/parketrenovatie/v-groef-frezen' },
          { name: ' Plinten & Deklijsten', path: '/parketrenovatie/plinten-en-deklijsten' },
        ],
      },

      {
        link: '/vloeren-leggen',
        title: 'Vloeren leggen',
        subPages: [
          { name: 'Parket', path: '/vloeren-leggen/parket' },
          { name: 'Laminaat', path: '/vloeren-leggen/laminaat' },
          { name: 'PVC', path: '/vloeren-leggen/pvc' },
          { name: 'Tapijt', path: '/vloeren-leggen/tapijt' },
          { name: 'Linoleum', path: '/vloeren-leggen/linoleum' },
          { name: 'Visgraat', path: '/vloeren-leggen/visgraat' },
          { name: 'Walvisgraat', path: '/vloeren-leggen/walvisgraat' },
          { name: 'Hongaarse punt', path: '/vloeren-leggen/hongaarse-punt' },
          { name: 'Weense punt', path: '/vloeren-leggen/weense-punt' },
          { name: 'PVC Tegels', path: '/vloeren-leggen/pvc-tegels' },
          { name: 'Mozaïek en patroon', path: '/vloeren-leggen/mozaiek-en-patroon' },
          { name: 'Hexagon & 3D', path: '/vloeren-leggen/hexagon-&-3d' },
          { name: 'Tapis', path: '/vloeren-leggen/tapis' },
          { name: 'Bourgogne', path: '/vloeren-leggen/bourgogne' },
        ],
      },
      {
        link: '/traprenovatie',
        title: 'Traprenovatie',
        subPages: [
          { name: 'Bekleden met PVC', path: '/traprenovatie/bekleden-met-pvc' },
          { name: 'Bekleden met laminaat', path: '/traprenovatie/bekleden-met-laminaat' },
          { name: 'Bekleden met hout', path: '/traprenovatie/bekleden-met-hout' },
          { name: 'Bekleden met tapijt', path: '/traprenovatie/bekleden-met-tapijt' },
          { name: 'Bekleden met linoleum', path: '/traprenovatie/bekleden-met-linoleum' },
          { name: 'Schuren en behandelen', path: '/traprenovatie/schuren-en-behandelen' },
          { name: 'Schuren en schilderen', path: '/traprenovatie/schuren-en-schilderen' },
          {
            name: 'Beton Ciré',
            subPages: [
              { name: 'Beton Ciré Metal stuc', path: '/traprenovatie/beton-cire/metal-stuc' },
              { name: 'Beton Ciré Glamour stuc', path: '/traprenovatie/beton-cire/glamour-stuc' },
              { name: 'Beton Ciré Brut', path: '/traprenovatie/beton-cire/brut' },
              { name: 'Beton Ciré Parel', path: '/traprenovatie/beton-cire/parel' },
              { name: 'Beton Ciré Croco', path: '/traprenovatie/beton-cire/croco' },
              { name: 'Beton Ciré Venetiaans', path: '/traprenovatie/beton-cire/venetiaans' },
              { name: 'Beton Ciré Acoustic', path: '/traprenovatie/beton-cire/acoustic' },
            ],
          },
          { name: 'Open trap', path: '/traprenovatie/open-trap' },
          { name: 'Dichte trap', path: '/traprenovatie/dichte-trap' },
          { name: 'Verlichting', path: '/traprenovatie/verlichting' },
        ],
      },
      {
        link: '/stofferen',
        title: 'Stofferen',
        subPages: [
          { name: 'Trap', path: '/stofferen/trap' },
          { name: 'Vloer', path: '/stofferen/vloer' },
          { name: 'Tapijttegels', path: '/stofferen/tapijttegels' },
          { name: 'Meubels', path: '/stofferen/meubels' },
          { name: 'Deurmat', path: '/stofferen/deurmat' },
          { name: 'Droogloopmat', path: '/stofferen/droogloopmat' },
          { name: 'Rode loper', path: '/stofferen/rode-loper' },
          { name: 'Reinigingsservice', path: '/stofferen/reinigingsservice' },
          { name: 'Tapijt verwijderen', path: '/stofferen/tapijt-verwijderen' },
        ],
      },
      {
        link: '/overig',
        title: 'Overig',
        subPages: [
          { name: 'Vloerverwarming', path: '/overig/vloerverwarming' },
          { name: 'Egaliseren', path: '/overig/egaliseren' },
          { name: 'Gietvloeren', path: '/overig/gietvloeren' },
          { name: 'Tegelen', path: '/overig/tegelen' },
          { name: 'Vloer verwijderen', path: '/overig/vloer-verwijderen' },
          { name: 'Natuursteen behandelen', path: '/overig/natuursteen-behandelen' },
          { name: 'Opslag', path: '/overig/opslag' },
        ],
      },
    ],
  },
  {
    name: 'Zakelijk',
    path: '/zakelijk',
  },
  {
    name: 'Veelgestelde vragen',
    path: '/veelgestelde-vragen',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Parketrenovatie',
    path: '/parketrenovatie/',
    columns: [
      {
        link: '',
        title: '',
        subPages: [
          { name: ' Schuren en polijsten', path: '/parketrenovatie/schuren-en-polijsten' },
          { name: ' Schuren en lakken', path: '/parketrenovatie/schuren-en-lakken' },
          { name: ' Schuren en oliën', path: '/parketrenovatie/schuren-en-olien' },
          { name: ' Schuren en hardwaxen', path: '/parketrenovatie/schuren-en-hardwaxen' },
          { name: ' Aanhelen / Uitbreiden', path: '/parketrenovatie/aanhelen-uitbreiden' },
          { name: ' Reparatie', path: '/parketrenovatie/reparatie' },
          { name: ' Drevelen', path: '/parketrenovatie/drevelen' },
          { name: ' V-groef frezen', path: '/parketrenovatie/v-groef-frezen' },
          { name: ' Plinten & Deklijsten', path: '/parketrenovatie/plinten-en-deklijsten' },
        ],
      },
    ],
  },
  {
    name: 'Vloeren leggen',
    path: '/vloeren-leggen',
    columns: [
      {
        link: '',
        title: '',
        subPages: [
          { name: 'Parket', path: '/vloeren-leggen/parket' },
          { name: 'Laminaat', path: '/vloeren-leggen/laminaat' },
          { name: 'PVC', path: '/vloeren-leggen/pvc' },
          { name: 'Tapijt', path: '/vloeren-leggen/tapijt' },
          { name: 'Linoleum', path: '/vloeren-leggen/linoleum' },
          { name: 'Visgraat', path: '/vloeren-leggen/visgraat' },
          { name: 'Walvisgraat', path: '/vloeren-leggen/walvisgraat' },
          { name: 'Hongaarse punt', path: '/vloeren-leggen/hongaarse-punt' },
          { name: 'Weense punt', path: '/vloeren-leggen/weense-punt' },
          { name: 'PVC Tegels', path: '/vloeren-leggen/pvc-tegels' },
          { name: 'Mozaïek en patroon', path: '/vloeren-leggen/mozaiek-en-patroon' },
          { name: 'Hexagon & 3D', path: '/vloeren-leggen/hexagon-&-3d' },
          { name: 'Tapis', path: '/vloeren-leggen/tapis' },
          { name: 'Bourgogne', path: '/vloeren-leggen/bourgogne' },
        ],
      },
    ],
  },
  {
    path: '/traprenovatie',
    name: 'Traprenovatie',
    columns: [
      {
        link: '',
        title: '',
        subPages: [
          { name: 'Bekleden met PVC', path: '/traprenovatie/bekleden-met-pvc' },
          { name: 'Bekleden met laminaat', path: '/traprenovatie/bekleden-met-laminaat' },
          { name: 'Bekleden met hout', path: '/traprenovatie/bekleden-met-hout' },
          { name: 'Bekleden met tapijt', path: '/traprenovatie/bekleden-met-tapijt' },
          { name: 'Bekleden met linoleum', path: '/traprenovatie/bekleden-met-linoleum' },
          { name: 'Schuren en behandelen', path: '/traprenovatie/schuren-en-behandelen' },
          { name: 'Schuren en schilderen', path: '/traprenovatie/schuren-en-schilderen' },
          {
            name: 'Beton Ciré',
            subPages: [
              { name: 'Beton Ciré Metal stuc', path: '/traprenovatie/beton-cire/metal-stuc' },
              { name: 'Beton Ciré Glamour stuc', path: '/traprenovatie/beton-cire/glamour-stuc' },
              { name: 'Beton Ciré Brut', path: '/traprenovatie/beton-cire/brut' },
              { name: 'Beton Ciré Parel', path: '/traprenovatie/beton-cire/parel' },
              { name: 'Beton Ciré Croco', path: '/traprenovatie/beton-cire/croco' },
              { name: 'Beton Ciré Venetiaans', path: '/traprenovatie/beton-cire/venetiaans' },
              { name: 'Beton Ciré Acoustic', path: '/traprenovatie/beton-cire/acoustic' },
            ],
          },
          { name: 'Open trap', path: '/traprenovatie/open-trap' },
          { name: 'Dichte trap', path: '/traprenovatie/dichte-trap' },
          { name: 'Verlichting', path: '/traprenovatie/verlichting' },
        ],
      },
    ],
  },
  {
    name: 'Stofferen',
    path: '/stofferen',
    columns: [
      {
        link: '',
        title: '',
        subPages: [
          { name: 'Trap', path: '/stofferen/trap' },
          { name: 'Vloer', path: '/stofferen/vloer' },
          { name: 'Tapijttegels', path: '/stofferen/tapijttegels' },
          { name: 'Meubels', path: '/stofferen/meubels' },
          { name: 'Deurmat', path: '/stofferen/deurmat' },
          { name: 'Droogloopmat', path: '/stofferen/droogloopmat' },
          { name: 'Rode loper', path: '/stofferen/rode-loper' },
          { name: 'Reinigingsservice', path: '/stofferen/reinigingsservice' },
          { name: 'Tapijt verwijderen', path: '/stofferen/tapijt-verwijderen' },
        ],
      },
    ],
  },
  {
    path: '/overig',
    name: 'Overig',
    columns: [
      {
        link: '',
        title: '',
        subPages: [
          { name: 'Vloerverwarming', path: '/overig/vloerverwarming' },
          { name: 'Egaliseren', path: '/overig/egaliseren' },
          { name: 'Gietvloeren', path: '/overig/gietvloeren' },
          { name: 'Tegelen', path: '/overig/tegelen' },
          { name: 'Vloer verwijderen', path: '/overig/vloer-verwijderen' },
          { name: 'Natuursteen behandelen', path: '/overig/natuursteen-behandelen' },
          { name: 'Opslag', path: '/overig/opslag' },
        ],
      },
    ],
  },
];

// a single item in a colmun in the menu (the menu that apears when we hover over a certain link)
const HeaderColumnItem: React.FC<
  | RouteWithPath
  | {
      name: string;
      subPages: RouteWithPath[];
    }
> = (routeInfo) => {
  const [isOpened, setIsOpened] = useState(false);
  const hasSubPages = 'subPages' in routeInfo && routeInfo.subPages.length;
  return (
    <div className="flex  flex-col">
      {hasSubPages ? (
        <h5
          key={routeInfo.name}
          onClick={() => setIsOpened((val) => !val)}
          className={clsx(
            'text-sm flex  items-center hover:text-primaryDefault group whitespace-nowrap cursor-pointer',
            {
              'text-primaryDefault': isOpened,
            }
          )}
        >
          {routeInfo.name}
          {/* {hasSubPages && <img src="/icons/dropDown.svg" className={cn('mx-2 inline', { 'rotate-180': isOpened })} />} */}

          <span className={cn('mx-2 inline', { 'rotate-180': isOpened })}>
            <DropDownIcon className={cn('group-hover:stroke-primaryDefault', { 'stroke-primaryDefault': isOpened })} />
          </span>
        </h5>
      ) : (
        <Link
          href={'path' in routeInfo ? routeInfo.path : '/'}
          key={routeInfo.name}
          className={clsx(
            'text-sm flex items-center hover:text-primaryDefault group whitespace-nowrap cursor-pointer',
            {
              'text-primaryDefault': isOpened,
            }
          )}
        >
          {routeInfo.name}
        </Link>
      )}
      {'subPages' in routeInfo && isOpened && (
        <div className="flex flex-col pl-3">
          {'subPages' in routeInfo &&
            routeInfo.subPages &&
            routeInfo.subPages.map((item) => (
              <Link
                href={item.path}
                key={routeInfo.name}
                className="text-sm w-full  hover:text-primaryDefault cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

// a column in the menu (when hovering over a certain link)

const HeaderColumn: React.FC<HeaderColumnInfo & { index: number }> = ({ subPages, title, link }) => {
  return (
    <>
      <div className="flex flex-col   gap-[11px]">
        <Link href={link} className="text-sm font-semibold hover:text-secondaryDefault text-primaryDefault ">
          {title}
        </Link>
        <div className="flex w-[180px] flex-col gap-1">
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
    <div className="flex  gap-[33px] py-[22px]  px-[44px]">
      {hoveredRouteColumns.map((column, index) => (
        <HeaderColumn key={column.title} {...column} index={index} />
      ))}
    </div>
  );
};

// the top section of the header that includes logo and social links
export const HeaderTopSection = () => {
  return (
    <div className="flex w-[1201px] bg-white items-center justify-between ">
      <Link href="/">
        {' '}
        <img src={appConfig.logoSrcImg} />
      </Link>
      <div className="flex items-center lg:min-w-[733px] p-[10px] justify-around">
        <motion.div
          className=" w-[15.32px] h-[16px] rounded-full"
          initial={{ backgroundColor: '#fff' }}
          animate={{
            backgroundColor: ['#37CD76', '#fff', '#37CD76'],
            transition: { duration: 2, ease: 'easeIn', repeat: Infinity },
          }}
        ></motion.div>
        <TitleCarousel />
        <div className="flex gap-[22px] items-center ">
          <div className="cursor-pointer " onClick={() => window.open(appConfig.instagramAccount, '_blank')}>
            <InstagramLogo />
          </div>
          <div className="cursor-pointer " onClick={() => window.open(appConfig.tiktokAccount, '_blank')}>
            <TikTokIcon />
          </div>
        </div>
      </div>
      {/* removing secondary button default hovering */}
      <SecondaryBtnLink href="/offerte">Offerte aanvragen</SecondaryBtnLink>
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
  const path = 'path' in route && route.path;
  const columns = 'columns' in route && route.columns;
  return (
    <>
      <div className={cn('flex  items-center  cursor-pointer')}>
        {path ? (
          <Link
            onMouseOver={() => setHoveredLink(route.name)}
            href={route.path as string}
            className={cn('font-bold flex w-fit group items-center text-[16px] ', {
              'text-secondaryDefault ': hoveredLink === route.name,
            })}
          >
            {route.name}

            {/* {columns && <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />} */}
            {columns && (
              <div className={cn('mx-2')}>
                <DropDownIcon
                  className={cn(' block mx-2', {
                    'stroke-secondaryDefault  ': hoveredLink === route.name,
                  })}
                />
              </div>
            )}
          </Link>
        ) : (
          <h3
            onMouseOver={() => setHoveredLink(route.name)}
            className={cn('font-bold w-fit text-[16px]', {
              'text-secondaryDefault': hoveredLink === route.name,
            })}
          >
            {route.name}
            {columns && <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />}
          </h3>
        )}
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== 5 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

const DropDownColumnLink: React.FC<
  | RouteWithPath
  | {
      name: string;
      path?: string;
      subPages: RouteWithPath[];
    }
> = (page) => {
  const [openSubPages, setOpenSubPages] = useState(false);
  const pageSubpages = 'subPages' in page && page.subPages;
  return (
    <div className="flex flex-col relative  gap-1">
      {page.path ? (
        <Link
          href={(page.path as string) || '/'}
          onClick={() => setOpenSubPages((val) => !val)}
          className="text-sm flex items-center   hover:text-primaryDefault relative group w-full min-w-[160px] text-black text-opacity-80"
        >
          {page.name}
          {pageSubpages && (
            // <span className={cn('mx-2 inline')}>
            <div className={cn('mx-2', { 'rotate-180 ': openSubPages })}>
              <DropDownIcon
                className={cn('group-hover:stroke-primaryDefault   block mx-2', {
                  'stroke-primaryDefault': openSubPages,
                })}
              />
            </div>
            // </span>
          )}
        </Link>
      ) : (
        <BodyText
          onClick={() => setOpenSubPages((val) => !val)}
          className="text-sm flex items-center   hover:text-primaryDefault relative group w-full min-w-[160px] text-black text-opacity-80"
        >
          {page.name}
          {pageSubpages && (
            // <span className={cn('mx-2 inline')}>
            <div className={cn('mx-2', { 'rotate-180 ': openSubPages })}>
              <DropDownIcon
                className={cn('group-hover:stroke-primaryDefault   block mx-2', {
                  'stroke-primaryDefault': openSubPages,
                })}
              />
            </div>
            // </span>
          )}
        </BodyText>
      )}
      {pageSubpages && openSubPages && (
        <div className="flex flex-col px-2 gap-1">
          {pageSubpages.map((subPage) => (
            <Link
              href={subPage.path}
              key={subPage.name}
              className="text-sm whitespace-nowrap   hover:text-primaryDefault  w-full min-w-[160px] text-black text-opacity-80"
            >
              {subPage.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// a silgle column for the dropDown
const DropDownColumn: React.FC<{ routeName: string }> = ({ routeName }) => {
  const hoveredRoute = headerRoutes.find((route) => route.name === routeName);
  const hoveredRouteColumn =
    hoveredRoute && 'columns' in hoveredRoute && hoveredRoute.columns && hoveredRoute.columns[0];
  if (!hoveredRouteColumn) return null;
  return (
    <div className="flex absolute bg-white   top-[29px] w-fit flex-col left-1/2 -translate-x-1/2 gap-1 py-[22px] px-[44px]  border rounded-[10px] border-blackDark  border-opacity-20 ">
      {hoveredRouteColumn.subPages.map((page) => (
        <DropDownColumnLink key={page.name} {...page} />
      ))}
    </div>
  );
};

// a link in the header in the second row (non bold link)
export const HeaderLink: React.FC<{
  route: HeaderRoute;
  index: number;
}> = ({ route, index }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [clientSide, setClientSide] = useState(false);
  const lastScrollTop = useRef<number>(clientSide ? window.pageYOffset || document.documentElement.scrollTop : 0);

  // writing the logic of the dropdowns hiding and displaying
  useEffect(() => {
    setClientSide(true);
    const handleScroll = async () => {
      const currentScrollTop = clientSide ? window.pageYOffset || document.documentElement.scrollTop : 0;
      //if the user scroll down we want to hide the dropdowns
      if (currentScrollTop >= lastScrollTop.current) {
        await setShowDropDown(false);
      }
      lastScrollTop.current = currentScrollTop;
    };
    // adding and removing events only on browser (client side)
    if (clientSide) window.addEventListener('scroll', handleScroll);

    return () => {
      if (clientSide) window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, clientSide]);

  return (
    <>
      <div
        onMouseLeave={() => setShowDropDown(false)}
        onMouseOver={() => setShowDropDown(true)}
        className="flex relative min-h-[30px] items-center cursor-pointer "
      >
        <Link
          href={route.path || '/'}
          className={cn('text-[16px] flex h-fit items-end leading-tight  gap-1', {
            'text-secondaryDefault': showDropDown,
          })}
        >
          {route.name}
          {'columns' in route && route.columns && (
            <div className=" ">
              <DropDownIcon
                className={cn('group-hover:stroke-secondaryDefault mx-3  ', {
                  'stroke-secondaryDefault': showDropDown,
                })}
              />
            </div>
          )}
        </Link>
        {showDropDown && <DropDownColumn routeName={route.name} />}
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== headerRoutes.length - 7 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

// the links of the header including the first row (bold links)
export const HeaderLinksSection = () => {
  const [hoveredLink, setHoveredLink] = useState('');
  const hoveredLinkRouteIndex = headerRoutes.findIndex((route) => route.name === hoveredLink);
  const hoveredRoute = headerRoutes[hoveredLinkRouteIndex];

  return (
    <div
      onMouseLeave={() => setHoveredLink('')}
      className="flex   flex-col items-center    gap-[39px] relative  justify-center "
    >
      <div className="flex z-10   gap-[33px] py-1 w-full items-center ">
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
      {hoveredLink && hoveredRoute && 'columns' in hoveredRoute && hoveredRoute.columns && (
        // the top is 30px if the hovered link at the first row (bold)
        // the top is 88px if the hovered link at the second row
        <div
          className={cn('absolute   z-10 border rounded-[10px] border-black20 border-opacity-20  w-fit bg-white ', {
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

export const HeaderDropDowns = () => {
  const subHeaderHidingAnimation = useAnimation();
  const [clientSide, setClientSide] = useState(false);
  const lastScrollTop = useRef<number>(clientSide ? window.pageYOffset || document.documentElement.scrollTop : 0);
  const hideSubHeader = async () => {
    await subHeaderHidingAnimation.start({ y: -200 });
  };

  const displaySubHeader = () => {
    subHeaderHidingAnimation.start({ y: 0, transition: { bounce: false } });
  };

  // setting the client side to true so we can use the window object (to avoid the error : window is not defiened)
  useEffect(() => {
    setClientSide(true);
  }, []);

  // writing the logic of the dropdowns hiding and displaying
  useEffect(() => {
    const handleScroll = async () => {
      const currentScrollTop = clientSide ? window.pageYOffset || document.documentElement.scrollTop : 0;
      //if the user scroll down we want to hide the dropdowns
      if (currentScrollTop >= lastScrollTop.current) {
        await hideSubHeader();
      } else {
        // if the user scroll up we want to display the dropdowns
        displaySubHeader();
      }
      lastScrollTop.current = currentScrollTop;
    };
    // adding and removing events only on browser (client side)
    if (clientSide) window.addEventListener('scroll', handleScroll);

    return () => {
      if (clientSide) window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, clientSide]);
  return (
    <motion.div
      animate={subHeaderHidingAnimation}
      className="flex  bg-white  w-full z-0 pb-5  gap-[50px] justify-center items-center"
    >
      {headerRoutes.slice(6).map((route, index) => (
        <HeaderLink route={route} key={route.name} index={index} />
      ))}
    </motion.div>
  );
};

const DesktopHeader = () => {
  return (
    <div className=" hidden lg:flex flex-col  z-50 w-full  fixed top-0 items-center left-0">
      <div className="hidden lg:flex  w-full  flex-col  z-50 gap-[39px]  py-6 items-center bg-white">
        {/* the top section that includes the logo and the social links */}
        <HeaderTopSection />
        {/* the section that includes the bold links */}
        <HeaderLinksSection />
      </div>
      {/* a section for the dropdowns (last row) */}
      <HeaderDropDowns />
    </div>
  );
};

const MobileBoldLinkColumnSubpage: React.FC<
  | RouteWithPath
  | {
      name: string;
      subPages: RouteWithPath[];
    }
> = (subPage) => {
  const [isSubpagesOpened, setIsSubpagesOpened] = useState(false);
  const subPages = 'subPages' in subPage && subPage.subPages;
  return (
    <div className="flex flex-col ">
      {'path' in subPage && !subPages ? (
        <Link
          href={subPage.path}
          onClick={() => setIsSubpagesOpened((val) => !val)}
          className="text-lg   cursor-pointerflex flex items-center active:text-primaryDefault tracking-[-2%]"
        >
          {subPage.name}
          {subPages && (
            <img src="/icons/dropDown.svg" className={cn('mx-4 w-[16px]', { 'rotate-180': isSubpagesOpened })} />
          )}
        </Link>
      ) : (
        <p
          onClick={() => setIsSubpagesOpened((val) => !val)}
          className="text-lg   cursor-pointerflex flex items-center  tracking-[-2%]"
        >
          {subPage.name}
          {subPages && (
            <img src="/icons/dropDown.svg" className={cn('mx-4 w-[16px]', { 'rotate-180': isSubpagesOpened })} />
          )}
        </p>
      )}
      {subPages && isSubpagesOpened && (
        <div className="flex px-2 flex-col ">
          {subPages.map((subPage) => (
            <p key={subPage.name} className="text-base ">
              {subPage.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
const MobileBoldLinkColumn: React.FC<HeaderColumnInfo> = ({ subPages, title }) => {
  const [isSubpagesOpened, setIsSubpagesOpened] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <h4
        onClick={() => setIsSubpagesOpened((val) => !val)}
        className="text-[19px]  cursor-pointer  flex items-center "
      >
        {title}
        {subPages && (
          <img src="/icons/dropDown.svg" className={cn('mx-4 w-[20px]', { 'rotate-180': isSubpagesOpened })} />
        )}{' '}
      </h4>
      {subPages && isSubpagesOpened && (
        <div className="flex flex-col px-2  gap-1">
          {subPages.map((subPage) => (
            <MobileBoldLinkColumnSubpage key={subPage.name} {...subPage} />
          ))}
        </div>
      )}
    </div>
  );
};
export const MobileMenuBoldLink: React.FC<HeaderRoute> = (headerRoute) => {
  const [isColumnsOpened, setIsColumnsOpened] = useState<boolean>(false);
  const columns = 'columns' in headerRoute && headerRoute.columns;
  const path = 'path' in headerRoute && headerRoute.path;
  return (
    <div className="flex   flex-col">
      {columns && (
        <h4
          onClick={() => setIsColumnsOpened((val) => !val)}
          className="text-xl  font-semibold cursor-pointer  flex items-center tracking-[-2%]"
        >
          {headerRoute.name}{' '}
          {columns && (
            <img src="/icons/dropDown.svg" className={cn('mx-4 w-[20px]', { 'rotate-180': isColumnsOpened })} />
          )}
        </h4>
      )}
      {path && !columns && (
        <Link
          className="text-xl font-semibold cursor-pointer active:text-primaryDefault  flex items-center tracking-[-2%]"
          href={path}
        >
          {' '}
          {headerRoute.name}{' '}
        </Link>
      )}
      {columns && isColumnsOpened && (
        <div className="flex px-2  flex-col">
          {columns.map((column) => (
            <MobileBoldLinkColumn key={column.title} {...column} />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenuBoldLinks = () => {
  return (
    <div className="flex flex-col min-w-[300px] w-fit  pl-4 gap-2">
      {headerRoutes.slice(0, 6).map((header) => (
        <MobileMenuBoldLink key={header.name} {...header} />
      ))}
    </div>
  );
};

const MobileMenu: React.FC<{ setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  setIsMenuOpened,
}) => {
  return (
    <div className="flex bg-white max-h-[100vh] overflow-y-scroll min-w-[80vw] py-24 items-center z-40 flex-col gap-1 fixed top-0 right-0">
      <MobileMenuBoldLinks />
      <i
        onClick={() => setIsMenuOpened(false)}
        className="bi absolute top-3  right-3 text-3xl font-semibold text-red-500 bi-x-lg"
      ></i>
    </div>
  );
};

const MobileHeader = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const currPathname = usePathname();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [currPathname]);
  return (
    <div className="flex z-50 bg-white w-full px-3 sticky top-0   lg:hidden  py-3 justify-between">
      <Link href="/">
        <img src={appConfig.logoSrcImg} width={120} />
      </Link>
      <i className="bi bi-list text-5xl font-bold" onClick={() => setIsMenuOpened((val) => !val)}></i>
      {isMenuOpened && <MobileMenu setIsMenuOpened={setIsMenuOpened} />}
    </div>
  );
};

// the header element
export const Header = () => {
  return (
    <>
      {/* header for desktop view */}
      <DesktopHeader />
      {/* header for mobile */}
      <MobileHeader />
    </>
  );
};
