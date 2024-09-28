import { SecondaryOutlinedBtn } from '@/components/theme/buttons';

export const ContactSection = () => {
  return (
    <div className="py-24 flex items-center justify-center ">
      <div className="flex w-[1199px] max-w-full justify-between">
        <div className="flex flex-col">
          <div className="flex gap-[33px] ">
            <h4 className="text-[25px] text-primaryDefault  font-semibold w-[282px] max-w-full">
              Geen vraag is te gek, we helpen je graag verder!
            </h4>
            <SecondaryOutlinedBtn>Contact opnemen</SecondaryOutlinedBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
