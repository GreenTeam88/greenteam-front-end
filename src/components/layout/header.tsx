import { appConfig } from '@/config';

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

export const Header = () => {
  return (
    <div className="flex flex-col gap-[39px] max-w-[1440px] py-6 items-center bg-white">
      <HeaderTopSection />
    </div>
  );
};
