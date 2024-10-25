import { HeartFlowerIcon } from '@/components/icons/heartIcon';
import { ArrowIcon } from '@/components/icons/homePageIcons';
import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';

type CrauselCardInfo = {
  title: string;
  paragraphs: string[];
  buttonText: string;
  btnPath?: string;
  icon: React.ReactNode;
};

const CrauselCardUI: React.FC<CrauselCardInfo> = ({ btnPath, buttonText, icon, title, paragraphs }) => {
  return (
    <div className="flex p-[55px] gap-[44px]  items-center border-black10 border-opacity-10 border-2 rounded-[10px]">
      {icon}
      <div className="flex flex-col gap-[44px] max-w-[695px]">
        <div className="flex flex-col gap-[11px]">
          <h3 className=" text-primaryDefault font-semibold text-[25px]">{title}</h3>
          <div className="flex flex-col gap-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {btnPath ? <PrimaryBtnLink href={btnPath}>{buttonText}</PrimaryBtnLink> : <PrimaryBtn>{buttonText}</PrimaryBtn>}
      </div>
    </div>
  );
};

export const CrauselSection = () => {
  return (
    <div className="flex justify-center w-full items-center py-24 gap-[84px] ">
      <div className="rotate-180">
        {' '}
        <ArrowIcon />
      </div>
      <CrauselCardUI
        title="Green Team als groene partner voor parketvloeren"
        paragraphs={[
          'Met onze ruime 20 jaar ervaring in houten vloeren, weten wij bij Green Team als geen ander hoeveel verschil een frisse houten parketvloer kan maken. Onze parketteurs zetten zich met passie en volle overtuiging al jarenlang dag in dag uit in om vloeren een tweede leven en nieuwe uitstraling te geven. Met onze ruime ervaring en kennis kunnen wij volledig ontzorgen in het proces, van parket onderhoud tot aan het leggen van een nieuwe parketvloer.',
          'Wij hebben als doel om de parketvloer in een topconditie op te leveren en met al onze extra services een betrouwbare partner op het gebied van parketvloeren te zijn. Wij zetten graag net even die extra stap voor een lange termijn samenwerking met onze klanten.',
        ]}
        icon={<HeartFlowerIcon />}
        buttonText="Offerte aanvragen"
      />
      <ArrowIcon />
    </div>
  );
};
