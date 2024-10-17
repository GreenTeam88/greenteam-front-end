'use client';

import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { appConfig } from '@/config';
import { cn } from '@/lib/tailwind';
import { DropDownIcon } from '../icons/arrows';
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
    path: '/over-ons',
  },
  {
    name: 'Diensten',
    path: '/diensten',
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
    columns: [
      {
        title: '',
        subPages: [
          { name: ' Schuren en polijsten', path: '/' },
          { name: ' Schuren en lakken', path: '/' },
          { name: ' Schuren en oliën', path: '/' },
          { name: ' Schuren en hardwaxen', path: '/' },
          { name: ' Aanhelen / Uitbreiden', path: '/' },
          { name: ' Reparatie', path: '/' },
          { name: ' Drevelen', path: '/' },
          { name: ' V-groef frezen', path: '/' },
          { name: ' Plinten & Deklijsten', path: '/' },
        ],
      },
    ],
  },
  {
    name: 'Traprenovaties',
    columns: [
      {
        title: 'Traprenovaties',
        subPages: [
          { name: 'Bekleden met PVC', path: '/' },
          { name: 'Bekleden met laminaat', path: '/' },
          { name: 'Bekleden met hout', path: '/' },
          { name: 'Bekleden met tapijt', path: '/' },
          { name: 'Bekleden met linoleum', path: '/' },
          { name: 'Schuren en behandelen', path: '/' },
          { name: 'Schuren en schilderen', path: '/' },
          {
            name: 'BetonCiré',
            path: '/',
            subPages: [
              { name: 'BetonCiré Metal stuc', path: '/' },
              { name: 'BetonCiré Glamour stuc', path: '/' },
              { name: 'BetonCiré Brut', path: '/' },
              { name: 'BetonCiré Parel', path: '/' },
              { name: 'BetonCiré Croco', path: '/' },
              { name: 'BetonCiré Venetiaans', path: '/' },
              { name: 'BetonCiré Acoustic', path: '/' },
            ],
          },
          { name: 'Open trap', path: '/' },
          { name: 'Dichte trap', path: '/' },
          { name: 'Verlichting', path: '/' },
        ],
      },
    ],
  },
  {
    name: 'Vloeren leggen',
    columns: [
      {
        title: '',
        subPages: [
          { name: 'Parket leggen', path: '/' },
          { name: 'Laminaat leggen', path: '/' },
          { name: 'PVC leggen', path: '/' },
          { name: 'Tapijt leggen', path: '/' },
          { name: 'Linoleum leggen', path: '/' },
          { name: 'Visgraat', path: '/' },
          { name: 'Walvisgraat', path: '/' },
          { name: 'Hongaarse punt', path: '/' },
          { name: 'Weense punt', path: '/' },
          { name: 'Tegel', path: '/' },
          { name: 'mozaïek of patroon', path: '/' },
          { name: 'Hexagon & 3D', path: '/' },
          { name: 'Tapis', path: '/' },
          { name: 'Bourgogne', path: '/' },
        ],
      },
    ],
  },
  {
    name: 'Stofferen',
    columns: [
      {
        title: '',
        subPages: [
          { name: 'Trap', path: '/' },
          { name: 'Vloer', path: '/' },
          { name: 'Tapijttegels', path: '/' },
          { name: 'Meubels', path: '/' },
          { name: 'Deurmat', path: '/' },
          { name: 'Droogloopmat', path: '/' },
          { name: 'Rode loper', path: '/' },
          { name: 'Reinigingsservice', path: '/' },
          { name: 'Tapijt verwijderen', path: '/' },
        ],
      },
    ],
  },
  {
    name: 'Overig',
    columns: [
      {
        title: '',
        subPages: [
          { name: 'Vloerverwarming', subPages: [] },
          { name: 'Egaliseren', subPages: [] },
          { name: 'Gietvloeren', subPages: [] },
          { name: 'Tegelen', subPages: [] },
          { name: 'Vloer verwijderen', subPages: [] },
          { name: 'Natuursteen behandelen', subPages: [] },
          { name: 'Opslag', subPages: [] },
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
> = (subPage) => {
  const [isOpened, setIsOpened] = useState(false);
  const hasSubPages = 'subPages' in subPage && subPage.subPages.length;
  return (
    <div className="flex flex-col">
      <h5
        key={subPage.name}
        onClick={() => setIsOpened((val) => !val)}
        className={clsx('text-sm flex items-center hover:text-primaryDefault group whitespace-nowrap cursor-pointer', {
          'text-primaryDefault': isOpened,
        })}
      >
        {subPage.name}
        {/* {hasSubPages && <img src="/icons/dropDown.svg" className={cn('mx-2 inline', { 'rotate-180': isOpened })} />} */}
        {hasSubPages && (
          <span className={cn('mx-2 inline', { 'rotate-180': isOpened })}>
            <DropDownIcon className={cn('group-hover:stroke-primaryDefault', { 'stroke-primaryDefault': isOpened })} />
          </span>
        )}
      </h5>
      {'subPages' in subPage && isOpened && (
        <div className="flex flex-col pl-3">
          {'subPages' in subPage &&
            subPage.subPages &&
            subPage.subPages.map((item) => (
              <h5 key={subPage.name} className="text-sm w-full  hover:text-primaryDefault cursor-pointer">
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
      <div className="flex flex-col  gap-[11px]">
        <h5 className="text-sm font-semibold text-primaryDefault">{title}</h5>
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
    <div className="flex w-[1201px] bg-white items-center justify-between">
      <Link href="/">
        {' '}
        <img src={appConfig.logoSrcImg} />
      </Link>
      <div className="flex items-center min-w-[633px] p-[10px] justify-around">
        <motion.div
          className=" w-[15.32px] h-[16px] rounded-full"
          initial={{ backgroundColor: '#fff' }}
          animate={{
            backgroundColor: ['#37CD76', '#37CD76', '#37CD76', '#37CD76', '#fff', '#fff', '#fff'],
            transition: { duration: 5, ease: 'easeIn', repeat: Infinity },
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
      <button className="secondaryBtn ">Offerte aanvragen</button>
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
      <div
        onMouseOver={() => !hoveredLink && setHoveredLink(route.name)}
        className={cn('flex  items-center  cursor-pointer', { 'text-primaryDefault': hoveredLink === route.name })}
      >
        {path ? (
          <Link href={route.path} className="font-bold flex group items-center text-[16px]">
            {route.name}

            {/* {columns && <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />} */}
            {columns && (
              <div className={cn('mx-2')}>
                <DropDownIcon className={cn('group-hover:stroke-primaryDefault   block mx-2')} />
              </div>
            )}
          </Link>
        ) : (
          <h3 className="font-bold text-[16px]">
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
      subPages: RouteWithPath[];
    }
> = (page) => {
  const [openSubPages, setOpenSubPages] = useState(false);
  const pageSubpages = 'subPages' in page && page.subPages;
  return (
    <div className="flex flex-col relative  gap-1">
      <p
        onClick={() => setOpenSubPages((val) => !val)}
        className="text-sm flex items-center  hover:text-primaryDefault relative group w-full min-w-[160px] text-black text-opacity-80"
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
      </p>
      {pageSubpages && openSubPages && (
        <div className="flex flex-col px-2 gap-1">
          {pageSubpages.map((subPage) => (
            <p
              key={subPage.name}
              className="text-sm   hover:text-primaryDefault  w-full min-w-[160px] text-black text-opacity-80"
            >
              {subPage.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

// a silgle column for the dropDown
const DropDownColumn: React.FC<{ routeName: string }> = ({ routeName }) => {
  const hoveredRoute = headerRoutes.find((route) => route.name === routeName);
  const hoveredRouteColumn = hoveredRoute && 'columns' in hoveredRoute && hoveredRoute.columns[0];
  if (!hoveredRouteColumn) return null;
  return (
    <div className="flex absolute top-[29px] w-fit flex-col left-1/2 -translate-x-1/2 gap-[11px] py-[22px] px-[44px] bg-white border rounded-[10px] border-blackDark  border-opacity-20 ">
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
  return (
    <>
      <div
        onMouseLeave={() => setShowDropDown(false)}
        onMouseOver={() => setShowDropDown(true)}
        className="flex relative min-h-[30px] items-center cursor-pointer"
      >
        <h5
          className={cn('text-[16px] flex h-fit items-end leading-tight  gap-1', {
            'text-primaryDefault': showDropDown,
          })}
        >
          {route.name}
          {'columns' in route && route.columns && (
            <div className=" ">
              <DropDownIcon
                className={cn('group-hover:stroke-primaryDefault mx-3  ', {
                  'stroke-primaryDefault': showDropDown,
                })}
              />
            </div>
          )}
        </h5>
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
      className="flex  flex-col items-center    gap-[39px] relative  justify-center "
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
        console.log('running');
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
    <div className=" hidden lg:flex flex-col  z-40 w-full  fixed top-0 items-center left-0">
      <div className="hidden lg:flex  w-full  flex-col  z-30 gap-[39px]  py-6 items-center bg-white">
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
      <p
        onClick={() => setIsSubpagesOpened((val) => !val)}
        className="text-lg   cursor-pointerflex flex items-center tracking-[-2%]"
      >
        {subPage.name}
        {subPages && (
          <img src="/icons/dropDown.svg" className={cn('mx-4 w-[16px]', { 'rotate-180': isSubpagesOpened })} />
        )}
      </p>
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
        <div className="flex flex-col px-2 gap-1">
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

  return (
    <div className="flex flex-col">
      <h4
        onClick={() => setIsColumnsOpened((val) => !val)}
        className="text-xl font-semibold cursor-pointer  flex items-center tracking-[-2%]"
      >
        {headerRoute.name}{' '}
        {columns && (
          <img src="/icons/dropDown.svg" className={cn('mx-4 w-[20px]', { 'rotate-180': isColumnsOpened })} />
        )}{' '}
      </h4>
      {columns && isColumnsOpened && (
        <div className="flex px-2 flex-col">
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
    <div className="flex flex-col gap-2">
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
      <i onClick={() => setIsMenuOpened(false)} className="bi absolute top-3  right-3 hover:text-red-500 bi-x-lg"></i>
    </div>
  );
};

const MobileHeader = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <div className="flex w-full px-3   lg:hidden relative py-3 justify-between">
      <img src={appConfig.logoSrcImg} width={70} />
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
