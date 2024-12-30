import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, BodyTextBold } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import { ImageCarousel } from './animations/imageCrausel';
import { InfoCardProps } from './cards';

export const WhatWaitingForCard: React.FC<InfoCardProps & { orangeText: string }> = ({
  imgSrc,
  paragraphs,
  title,
  imgClassName,
  buttonText,
  secondBtnText,
  secondBtnLink,
  buttonLink,
  className,
  orangeText,
}) => {
  return (
    <div
      className={cn(
        'flex w-full  py-[49px] px-3 lg:py-[120px] flex-col lg:flex-row  items-center justify-center gap-[27px] lg:gap-[57px]',
        className
      )}
    >
      <div className="flex flex-col max-w-[508px]  px-4 lg:px-0 gap-4 lg:gap-[33px] ">
        <div className="flex flex-col gap-[11px] ">
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[25px] ">{title}</h3>
          <div className="flex flex-col gap-2 lg:gap-3">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={String(index)}>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[11px]">
          <BodyTextBold className="text-secondaryDefault"> {orangeText}</BodyTextBold>
          <div className="flex gap-3">
            {buttonText && <PrimaryBtnLink href={buttonLink || '/'}>{buttonText}</PrimaryBtnLink>}
            {secondBtnText && <PrimaryBtnLink href={secondBtnLink || '/'}>{secondBtnText}</PrimaryBtnLink>}
          </div>
        </div>
      </div>
      {typeof imgSrc === 'string' ? (
        <img className={cn('w-full lg:w-fit rounded-lg', imgClassName)} src={imgSrc} />
      ) : (
        <ImageCarousel images={imgSrc} />
      )}
    </div>
  );
};
