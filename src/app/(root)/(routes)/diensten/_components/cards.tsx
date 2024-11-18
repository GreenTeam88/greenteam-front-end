import clsx from 'clsx';

import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

export type InfoCardProps = {
  mainTitle?: string;
  title: string;
  imgSrc: string;
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
        'flex   w-full p-7 lg:p-0 lg:py-[99px] flex-col lg:flex-row bg-secondaryLight items-center justify-center gap-7 lg:gap-[57px]',
        className
      )}
      {...props}
    >
      <img className="lg:w-fit w-full rounded-lg" src={imgSrc} />
      <div className={clsx('flex flex-col   px-3 lg:px-0 max-w-[508px]  gap-[33px] ', contentContainerClassName)}>
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
        <div className="flex gap-3">
          {buttonText &&
            (buttonLink ? (
              <PrimaryBtnLink href={buttonLink}>{buttonText}</PrimaryBtnLink>
            ) : (
              <PrimaryBtn>{buttonText}</PrimaryBtn>
            ))}
          {secondBtnText &&
            (secondBtnLink ? (
              <PrimaryBtnLink href={secondBtnLink}>{buttonText}</PrimaryBtnLink>
            ) : (
              <PrimaryBtn>{buttonText}</PrimaryBtn>
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
      className={cn(
        'flex w-full py-[99px] p-3 lg:p-0 flex-col lg:flex-row  items-center justify-center gap-[57px]',
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
        <div className="flex gap-3">
          {buttonText &&
            (buttonLink ? (
              <PrimaryBtnLink href={buttonLink}>{buttonText}</PrimaryBtnLink>
            ) : (
              <PrimaryBtn>{buttonText}</PrimaryBtn>
            ))}
          {secondBtnText &&
            (secondBtnLink ? (
              <PrimaryBtnLink href={secondBtnLink}>{secondBtnText}</PrimaryBtnLink>
            ) : (
              <PrimaryBtn>{secondBtnText}</PrimaryBtn>
            ))}
        </div>
      </div>
      <img className="w-full lg:w-fit rounded-lg" src={imgSrc} />
    </div>
  );
};
