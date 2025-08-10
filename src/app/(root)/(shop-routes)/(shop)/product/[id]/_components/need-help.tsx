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
            <p className="text-[#195B35] underline">085-401 93 45</p>
          </div>
        </div>
        <p className="text-[#212529]">
          Direct iemand spreken <span className="font-bold">maandag t/m vrijdag van 9.00 - 17.00</span>
        </p>
        <p className="text-[#212529]">
          Buiten openingstijden: <span className="text-[#195B35]">info@greenteam.nl</span>
        </p>
      </div>
    </div>
  );
};
