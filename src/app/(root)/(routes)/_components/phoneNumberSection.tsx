import { SmallSecondaryOutlinedBtn } from '@/components/theme/buttons';
import { HeadlineSemibold } from '@/components/theme/typography';

export const PhoneNumberSection = () => {
  return (
    <div className="py-16 px-7 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-[27px] p-5 items-center rounded-[10px] bg-lightGray border border-black20 border-opacity-20 ">
        <HeadlineSemibold className="text-center lg:text-start">
          Liever teruggebeld worden? Laat je telefoonnummer achter.
        </HeadlineSemibold>
        <input
          className="bg-white border-black20 border-opacity-20 px-[20px] py-[12px] rounded-[8px]"
          placeholder="Telefoonnummer"
        />
        <SmallSecondaryOutlinedBtn>Verzenden</SmallSecondaryOutlinedBtn>
      </div>
    </div>
  );
};
