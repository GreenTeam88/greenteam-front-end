import { appConfig } from '@/config';

interface RouteWithPath {
  name: string;
  path: string;
}
interface RouteWithSubpages {
  name: string;
  subPages: { name: string; path: string }[];
}
type HeaderRoute = RouteWithPath | RouteWithSubpages;
const headerRoutes: HeaderRoute[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Over ons',
    path: '/',
  },
  {
    name: 'Diensten',
    subPages: [],
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
    subPages: [],
  },
  {
    name: 'Traprenovaties',
    subPages: [],
  },
  {
    name: 'Vloeren leggen',
    subPages: [],
  },
  {
    name: 'Stofferen',
    subPages: [],
  },
  {
    name: 'Overig',
    subPages: [],
  },
];

export const HeaderTopSection = () => {
  return (
    <div className="flex w-[1201px] items-center justify-between">
      <img src={appConfig.logoSrcImg} />
      <div className="flex items-center min-w-[633px] p-[10px] justify-around">
        <div className="bg-[#37CD76] w-[15.32px] h-[16px] rounded-full"></div>
        <p className="font-semibold text-[22px] text-primaryGreenD1"> Liever iemand spreken? Bel 085 401 93 45</p>
        <div className="flex gap-[22px]">
          <img src="/icons/InstagramLogo.png" />
          <img src="/icons/TiktokLogo.png" />
        </div>
      </div>
      <button className="secondaryBtn">Offerte aanvragen</button>
    </div>
  );
};

export const HeaderBoldLink: React.FC<{ route: HeaderRoute; index: number }> = ({ route, index }) => {
  return (
    <>
      <div className="flex  items-center">
        <h5 className="font-bold text-[16px]">
          {route.name}
          {'subPages' in route && route.subPages && (
            <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />
          )}
        </h5>
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== 5 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

export const HeaderLink: React.FC<{ route: HeaderRoute; index: number }> = ({ route, index }) => {
  return (
    <>
      <div className="flex  items-center">
        <h5 className="text-[16px]">
          {route.name}
          {'subPages' in route && route.subPages && (
            <img width={15} src="/icons/dropDown.svg" className="inline mx-2" />
          )}
        </h5>
      </div>
      {/* not making a border at the last element of the line  */}
      {index !== headerRoutes.length - 7 && <div className="h-[19px] border-[#E5E5E5] border-[1.64px]"></div>}
    </>
  );
};

export const HeaderLinksSection = () => {
  return (
    <div className="flex flex-col items-center gap-[39px]  justify-center ">
      <div className="flex gap-[33px] items-center ">
        {headerRoutes.slice(0, 6).map((route, index) => (
          <HeaderBoldLink key={route.name} index={index} route={route} />
        ))}
      </div>
      <div className="flex gap-[50px] items-center">
        {headerRoutes.slice(6).map((route, index) => (
          <HeaderLink route={route} key={route.name} index={index} />
        ))}
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex flex-col gap-[39px] max-w-[1440px] py-6 items-center bg-white">
      <HeaderTopSection />
      <HeaderLinksSection />
    </div>
  );
};
