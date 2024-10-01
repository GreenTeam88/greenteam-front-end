import { SecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyText, BodyTextSemibold, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-[40px] pr-[22px]">
      <div className="flex items-center gap-[33px] ">
        <h4 className="text-[25px] text-primaryDefault  tracking-[-2%] font-semibold w-[313px]">
          Geen vraag is te gek, we helpen je graag verder!
        </h4>
        <SecondaryOutlinedBtn>Contact opnemen</SecondaryOutlinedBtn>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex gap-[22px] items-center">
          <img src="/icons/envelope.svg" />
          <BodyTextSemibold>info@greenteam.nl</BodyTextSemibold>
        </div>
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/phone.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>085 401 93 45</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography className="text-secondaryDefault cursor-pointer hover:text-primaryDefault">
              Bellen
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px]">
          <img src="/icons/locationIcon.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>
              Rivium Boulevard 2 (HQ)
              <br />
              2909 LK, Capelle aan den IJssel
            </BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography className="text-secondaryDefault cursor-pointer hover:text-primaryDefault">
              Op de kaart bekijken
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px] ">
          <img src="/icons/clock.svg" className="h-fit" />
          <div className="flex flex-col">
            {appConfig.openingTimes.map((openingTime) => (
              <div className="flex" key={openingTime.day}>
                <BodyTextSemibold className="w-[120px]">{openingTime.day}</BodyTextSemibold>
                <BodyText className="w-[120px]">{openingTime.time}</BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSection = () => {
  return (
    <div className="py-24 flex items-center justify-center ">
      <div className="flex w-[1199px] max-w-full justify-between">
        {/* the contact info section includes email , phone , location and opening times */}
        <ContactInfo />
        <img className="w-[400px]" src="/home/locations.png" />
      </div>
    </div>
  );
};
