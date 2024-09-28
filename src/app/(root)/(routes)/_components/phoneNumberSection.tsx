import { SecondaryOutlinedBtn, SmallSecondaryOutlinedBtn } from '@/components/theme/buttons';
import { HeadlineSemibold } from '@/components/theme/typography';

export const PhoneNumberSection = () => {
  return (
    <div className="py-16">
      <div className="flex gap-[27px] p-5 items-center rounded-[10px] bg-lightGray border border-black20 border-opacity-20 ">
        <HeadlineSemibold>Liever teruggebeld worden? Laat je telefoonnummer achter.</HeadlineSemibold>
        <input
          className="bg-white border-black20 border-opacity-20 px-[20px] py-[12px] rounded-[8px]"
          placeholder="Telefoonnummer"
        />
        <SmallSecondaryOutlinedBtn>Verzenden</SmallSecondaryOutlinedBtn>
      </div>
    </div>
  );
};
