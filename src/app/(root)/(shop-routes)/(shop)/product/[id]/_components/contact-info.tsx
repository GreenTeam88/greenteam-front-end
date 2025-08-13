import { PhoneIcon } from '@/components/icons/phone';

export const ProductContactInfo = () => {
  return (
    <div className="flex w-full max-w-[1400px] gap-4 py-6">
      <div className="flex flex-col">
        <h3 className="text-[32px] font-medium">Persoonlijk advies?</h3>
        <p className="text-[#212529]">
          Wij staan graag voor u klaar met persoonlijk advies. We helpen graag met het vinden van een geschikte vloer.
          We kunnen bijvoorbeeld advies geven over vloerverwarming, over geluiddemping en of uw basisvloer geschikt is
          of dat deze eerst vlak moet worden gemaakt.
        </p>
      </div>
      <div className="bg-[#E4EFE9] w-[509px] rounded-[12px] py-3 px-2 flex flex-col ">
        <div className="flex gap-1">
          <PhoneIcon />
          <p className="text-xl font-medium text-paragraph">
            Bel nu: <span className="text-[#195B35] underline ">085-401 93 45</span>
          </p>
          <p className="text-paragraph">Direct iemand aan de lijn maandag t/m vrijdag van 09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
};
