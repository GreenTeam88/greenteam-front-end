import clsx from 'clsx';
import Link from 'next/link';
import { isValidElement } from 'react';

import { PrimaryBtn, PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2, HeadlineSemibold } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import { ImageCarousel } from './animations/imageCrausel';

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
  pagesLinks?: { path: string; name: string }[];
  pagesLinksContainerClassName?: string;
} & JSX.IntrinsicElements['div'];

export const OrangeInfoCard: React.FC<InfoCardProps> = ({
  title,
  imgSrc,
  mainTitle,
  pagesLinksContainerClassName,
  paragraphs,
  imgClassName,
  buttonLink,
  secondBtnLink,
  contentContainerClassName,
  buttonText,
  pagesLinks,
  secondBtnText,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex   w-full  lg:py-[99px] flex-col lg:flex-row bg-secondaryLight items-center justify-center gap-6 lg:gap-[57px]',
        className
      )}
      {...props}
    >
      <div className="flex w-fit flex-col ">
        {typeof imgSrc === 'string' ? (
          <img className={clsx('w-full lg:w-fit  rounded-lg ', imgClassName)} src={imgSrc} />
        ) : (
          <ImageCarousel images={imgSrc} />
        )}
        <div
          className={cn('flex max-w-full mt-[33px] flex-wrap', pagesLinksContainerClassName, { hidden: !pagesLinks })}
        >
          {pagesLinks?.map(({ name, path }) => (
            <div key={path} className="text-[#1C1C1C] text-opacity-40 text-[13px] leading-[20px] flex gap-2 pr-2">
              <Link className="hover:text-primaryDefault" href={path}>
                {name}
              </Link>
              <div>|</div>
            </div>
          ))}
        </div>
      </div>
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
              <PrimaryBtnLink href={secondBtnLink}>{secondBtnText}</PrimaryBtnLink>
            ) : (
              <PrimaryBtn>{secondBtnText}</PrimaryBtn>
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
  imgClassName,
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
      {typeof imgSrc === 'string' ? (
        <img className={clsx('w-full lg:w-fit rounded-lg', imgClassName)} src={imgSrc} />
      ) : (
        <ImageCarousel images={imgSrc} />
      )}
    </div>
  );
};

export type WhyGreenTeamCardProps = {
  title: string;
  paragraphs: string[] | JSX.Element[];
  icon: React.ReactNode;
};
export const WhyGreenTeamCard: React.FC<WhyGreenTeamCardProps> = ({ icon, paragraphs, title }) => {
  return (
    <div className="flex lg:min-h-[350px] flex-col py-[33px] h-full gap-[11px] px-[22px] rounded-[10px]  border-2 border-black10 border-opacity-10 max-w-[387px] ">
      <div className="flex gap-3 items-center">
        {icon}
        <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
      </div>
      <div className="flex flex-col gap-8">
        {paragraphs.map((paragraph) =>
          isValidElement(paragraph) ? paragraph : <BodyText key={paragraph as string}>{paragraph}</BodyText>
        )}
      </div>
    </div>
  );
};
