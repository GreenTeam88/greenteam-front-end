import { PrimaryBtn } from '@/components/theme/buttons';
import { BodyText } from '@/components/theme/typography';

export type InfoCardProps = {
  title: string;
  imgSrc: string;
  paragraphs: React.ReactNode[];
  buttonText: string;
};

export const OrangeInfoCard: React.FC<InfoCardProps> = ({ title, imgSrc, paragraphs, buttonText }) => {
  return (
    <div className="flex w-full py-[99px] bg-secondaryLight items-center justify-center gap-[57px]">
      <img className="w-[387px] rounded-lg" src={imgSrc} />
      <div className="flex flex-col max-w-[508px]  gap-[33px] ">
        <div className="flex flex-col gap-[11px] ">
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[25px] ">{title}</h3>
          <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph) => (
              <BodyText>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <PrimaryBtn>{buttonText}</PrimaryBtn>
      </div>
    </div>
  );
};

export const WhiteInfoCard: React.FC<InfoCardProps> = ({ title, imgSrc, paragraphs, buttonText }) => {
  return (
    <div className="flex w-full py-[99px] bg-white items-center justify-center gap-[57px]">
      <div className="flex flex-col max-w-[508px]  gap-[33px] ">
        <div className="flex flex-col gap-[11px] ">
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[25px] ">{title}</h3>
          <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph) => (
              <BodyText>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <PrimaryBtn>{buttonText}</PrimaryBtn>
      </div>{' '}
      <img className="w-[387px] rounded-lg" src={imgSrc} />
    </div>
  );
};
