import clsx from 'clsx';

import { ImageCarousel } from '@/components/animations/imageCrausel';
import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

export type InfoCardProps = {
  mainTitle?: string;
  imgClassName?: string;
  title: string;
  imgSrc: string | string[];
  contentContainerClassName?: string;
  paragraphs: React.ReactNode[];
  buttonText?: string;
  buttonLink?: string;
  secondBtnLink?: string;
  secondBtnText?: string;
} & JSX.IntrinsicElements['div'];

export const OrangeInfoCard: React.FC<InfoCardProps> = ({
  title,
  imgSrc,
  mainTitle,
  paragraphs,
  buttonLink,
  imgClassName,
  secondBtnLink,
  contentContainerClassName,
  buttonText,
  secondBtnText,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex   w-full p-7 lg:p-0 lg:py-[80px] flex-col-reverse lg:flex-row bg-secondaryLight items-center justify-center gap-4 lg:gap-[57px]',
        { 'items-start ': typeof imgSrc !== 'string' },
        className
      )}
      {...props}
    >
      {typeof imgSrc === 'string' ? (
        <img className={clsx('lg:w-fit w-full rounded-lg', imgClassName)} src={imgSrc} />
      ) : (
        <ImageCarousel images={imgSrc} />
      )}
      <div
        className={clsx('flex flex-col   px-3 lg:px-0 max-w-[508px] gap-3 lg:gap-[33px] ', contentContainerClassName)}
      >
        <div className="flex flex-col gap-[11px] ">
          <div className="flex flex-col gap-4">
            {mainTitle && <H2 className="text-primaryDefault">{mainTitle}</H2>}
            <h3 className="text-[24px] text-primaryDefault font-semibold leading-[37px] ">{title}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={String(index)}>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          {buttonText &&
            (buttonLink ? (
              <PrimaryBtnLink className="w-full lg:w-fit" href={buttonLink}>
                {buttonText}
              </PrimaryBtnLink>
            ) : (
              <PrimaryBtn className="w-full lg:w-fit">{buttonText}</PrimaryBtn>
            ))}
          {secondBtnText &&
            (secondBtnLink ? (
              <PrimaryBtnLink className="w-full lg:w-fit" href={secondBtnLink}>
                {secondBtnText}
              </PrimaryBtnLink>
            ) : (
              <PrimaryBtn className="w-full lg:w-fit">{secondBtnText}</PrimaryBtn>
            ))}
        </div>
      </div>
    </div>
  );
};

export const WhiteInfoCard: React.FC<InfoCardProps> = ({
  title,
  imgSrc,
  paragraphs,
  buttonLink,
  secondBtnLink,
  buttonText,
  secondBtnText,
  className,
}) => {
  return (
    <div
      // className={cn(
      //   'flex w-full  lg:py-[80px] p-3 lg:p-0 flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-[57px]',
      //   className
      // )}
      className={cn(
        'flex   w-full p-7 lg:p-0 lg:py-[80px] flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-[57px]',
        { 'items-start ': typeof imgSrc !== 'string' },
        className
      )}
    >
      <div className="flex flex-col max-w-[508px]  px-4 lg:px-0 gap gap-3 lg:gap-[33px] ">
        <div className="flex flex-col gap-[11px] ">
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[25px] ">{title}</h3>
          <div className="flex flex-col gap-3">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={String(index)}>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          {buttonText &&
            (buttonLink ? (
              <PrimaryBtnLink className="w-full lg:w-fit" href={buttonLink}>
                {buttonText}
              </PrimaryBtnLink>
            ) : (
              <PrimaryBtn className="w-full lg:w-fit">{buttonText}</PrimaryBtn>
            ))}
          {secondBtnText &&
            (secondBtnLink ? (
              <PrimaryBtnLink className="w-full lg:w-fit" href={secondBtnLink}>
                {secondBtnText}
              </PrimaryBtnLink>
            ) : (
              <PrimaryBtn className="w-full lg:w-fit">{secondBtnText}</PrimaryBtn>
            ))}
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
