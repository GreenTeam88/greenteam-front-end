import { SmallSecondaryOutlinedBtn } from '@/components/theme/buttons';
import { BodyTextSemibold, LinkTypography } from '@/components/theme/typography';
import { appConfig } from '@/config';

export const PhoneNumberSection = () => {
  return (
    <div className="py-16 px-7 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-[27px] p-5 items-center rounded-[10px] bg-lightGray border border-black20 border-opacity-20 ">
        <BodyTextSemibold className="text-center lg:text-start">
          Liever teruggebeld worden? Laat je telefoonnummer achter.
        </BodyTextSemibold>
        <input
          className="bg-white border-black20 border-opacity-20 px-[20px] py-[12px] rounded-[8px]"
          placeholder="Telefoonnummer"
        />
        <SmallSecondaryOutlinedBtn>Verzenden</SmallSecondaryOutlinedBtn>
      </div>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-[34px]">
        <div className="flex gap-12 flex-col lg:flex-row py-8 lg:items-center">
          <div className="flex items-center gap-3">
            <img src="/icons/email.png" />
            <LinkTypography className="hover:text-secondaryDefault text-[13px]" href={`mailto: ${appConfig.email}`}>
              {appConfig.email}
            </LinkTypography>
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/phone.svg" />
            <LinkTypography className="pr-3 border-r border-r-black20 border-opacity-20 text-[13px]">
              {appConfig.phoneNumber}
            </LinkTypography>
            <LinkTypography href={`tel:${appConfig.phoneNumber}`} className="fond-semibold hover:text-secondaryDefault">
              Bellen
            </LinkTypography>
          </div>
        </div>
      </div>
    </div>
  );
};
