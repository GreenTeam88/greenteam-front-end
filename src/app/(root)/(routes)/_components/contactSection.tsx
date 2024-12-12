import Link from 'next/link';

import { HQMap } from '@/components/HQmap';
import { BodyText, BodyTextSemibold, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';

export const ContactInfo = () => {
  return (
    <div className="flex max-w-full flex-col gap-[40px] pr-[22px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-[33px] ">
        <h4 className="text-[25px] text-primaryDefault  tracking-[-2%] font-semibold lg:w-[313px]">
          Geen vraag is te gek, we helpen je graag verder!
        </h4>
        <Link href="/contact" className="secondaryOutlinedBtn">
          Contact opnemen
        </Link>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/envelope.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.email}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`mailto:${appConfig.email}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Email verzenden
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px]  items-center">
          <img src="/icons/phone.svg" />
          <div className="flex gap-[11px]">
            <BodyTextSemibold>{appConfig.phoneNumber}</BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href={`tel:${appConfig.phoneNumber}`}
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Bellen
            </LinkTypography>
          </div>
        </div>
        <div className="flex items-center  gap-[22px]">
          <img src="/icons/locationIcon.svg" />
          <div className="flex items-center gap-[11px]">
            <BodyTextSemibold>
              Rivium Boulevard 2 (HQ)
              <br />
              2909 LK, Capelle aan den IJssel
            </BodyTextSemibold>
            <div className="bg-black20 bg-opacity-20 h-[22.56px] w-[1px] "></div>
            <LinkTypography
              href="https://maps.app.goo.gl/wSKHyT9dW8tugEVk6"
              className="text-secondaryDefault cursor-pointer hover:text-primaryDefault"
            >
              Op de kaart bekijken
            </LinkTypography>
          </div>
        </div>
        <div className="flex gap-[22px] ">
          <img src="/icons/clock.svg" className="h-fit" />
          <div className="flex flex-col">
            {appConfig.openingTimes.map((openingTime) => (
              <div className="flex" key={openingTime.day}>
                <BodyTextSemibold className="w-[120px]">{openingTime.day} :</BodyTextSemibold>
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
    <div className="py-24 flex items-center px-3 lg:px-0 justify-center ">
      <div className="flex flex-col gap-14 lg:gap-0 lg:flex-row lg:w-[1199px] max-w-full justify-between">
        {/* the contact info section includes email , phone , location and opening times */}
        <ContactInfo />
        <HQMap />
        {/* <img className="w-[400px]" src="/home/locations.png" /> */}
      </div>
    </div>
  );
};
