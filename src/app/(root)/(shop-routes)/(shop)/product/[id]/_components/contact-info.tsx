import { EmailIcon } from '@/components/icons/emailIcon';
import { PhoneIcon } from '@/components/icons/phone';

export const ProductContactInfo = () => {
  return (
    <div className="py-6 max-w-[1400px] flex gap-3 ">
      <div className="flex  flex-col w-[714px] gap-4 ">
        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] font-medium">Persoonlijk advies?</h3>
          <p className="text-[#212529]">
            Wij staan graag voor u klaar met persoonlijk advies. We helpen graag met het vinden van een geschikte vloer.
            We kunnen bijvoorbeeld advies geven over vloerverwarming, over geluiddemping en of uw basisvloer geschikt is
            of dat deze eerst vlak moet worden gemaakt.
          </p>
        </div>
        <div className="bg-[#E4EFE9] w-[509px] rounded-[12px] py-3 px-2 flex flex-col ">
          <div className="flex gap-2 flex-col">
            <div className="gap-2 flex items-center">
              <PhoneIcon />
              <p className="text-xl font-medium text-paragraph">
                Bel nu: <span className="text-[#195B35] underline ">085-401 93 45</span>
              </p>
            </div>
            <p className="text-paragraph">Direct iemand aan de lijn maandag t/m vrijdag van 09:00 - 17:00</p>
          </div>
        </div>
        <div className="bg-[#E4EFE9] w-[509px] rounded-[12px] py-3 px-2 flex  ">
          <div className="gap-2 flex items-center">
            <EmailIcon />
            <p className="text-xl font-medium text-paragraph">
              Maak nu een afspraak:
              <a href="info@greenteam.nl" className="text-[#195B35] underline ">
                {' '}
                info@greenteam.nl
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[486px] rounded-[15px] gap-2 bg-[#F7F7F7]">
        <img className="w-full rounded-t-[15px]" src="/contact/greenteam-desk.jpg" />
        <div className="flex flex-col w-full  p-4 items-center gap-2">
          <h3 className="font-semibold leading-tight text-[24px] text-paragraph">
            Wij leveren en leggen
            <br /> door heel Nederland
          </h3>
          <p className="text-[#212529] max-w-[333px] text-center">
            Open maandag t/m vrijdag van 09:00 - 17:30 Zaterdag en zondag gesloten
          </p>
        </div>
      </div>
    </div>
  );
};
