import { PhoneIcon } from '@/components/icons/phone';

export const NeedHelp = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col gap-3 rounded-[10px] bg-[#217946] bg-opacity-10 py-6 items-center justify-center">
        <p className="font-bold text-[19px] text-xl text-[#212529]">Persoonlijke hulp nodig?</p>
        <div className="flex gap-3">
          <div className="text-[#212529] font-bold text-[19px]">Bel nu:</div>
          <div className="flex gap-1">
            <PhoneIcon />
            <a className="text-[#195B35] underline" href="tel:085-401 93 45">
              085-401 93 45
            </a>
          </div>
        </div>
        <p className="text-[#212529] px-2 lg:px-0 text-center lg:text-start">
          Direct iemand spreken <span className="font-bold">maandag t/m vrijdag van 9.00 - 17.00</span>
        </p>
        <a href="mailto:info@greenteam.nl" className="text-[#212529]">
          Buiten openingstijden: <span className="text-[#195B35]">info@greenteam.nl</span>
        </a>
      </div>
    </div>
  );
};
