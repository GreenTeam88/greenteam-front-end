import { ImageCarousel } from '@/components/animations/imageCrausel';
import { PrimaryBtn } from '@/components/theme/buttons';
import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import { InfoCardProps } from '../../diensten/_components/cards';

export const WhatWaitingForCard: React.FC<InfoCardProps> = ({
  imgSrc,
  paragraphs,
  title,
  buttonText,
  secondBtnText,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex w-full py-[99px] p-3 lg:py-[120px] flex-col lg:flex-row  items-center justify-center gap-[57px]',
        className
      )}
    >
      <div className="flex flex-col max-w-[508px]  px-4 lg:px-0 gap-[33px] ">
        <div className="flex flex-col gap-[11px] ">
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[25px] ">{title}</h3>
          <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={String(index)}>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[11px]">
          <BodyTextBold className="text-secondaryDefault"> Ik wil dat de parketteur langskomt!</BodyTextBold>
          <div className="flex gap-3">
            {buttonText && <PrimaryBtn>{buttonText}</PrimaryBtn>}
            {secondBtnText && <PrimaryBtn>{secondBtnText}</PrimaryBtn>}
          </div>
        </div>
      </div>
      {typeof imgSrc === 'string' ? (
        <img className="w-full lg:w-fit rounded-lg" src={imgSrc} />
      ) : (
        <ImageCarousel images={imgSrc} />
      )}
    </div>
  );
};
