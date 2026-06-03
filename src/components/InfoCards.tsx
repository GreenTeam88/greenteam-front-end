/* eslint-disable @next/next/no-img-element */
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
} & React.HTMLAttributes<HTMLDivElement>;

export type WhyGreenTeamCardProps = {
  title: string;
  paragraphs: string[] | JSX.Element[];
  icon: React.ReactNode;
};

const CardButtonGroup = ({
  btnText,
  btnLink,
  secBtnText,
  secBtnLink,
}: {
  btnText?: string;
  btnLink?: string;
  secBtnText?: string;
  secBtnLink?: string;
}) => (
  <div className="flex flex-wrap gap-3">
    {btnText &&
      (btnLink ? <PrimaryBtnLink href={btnLink}>{btnText}</PrimaryBtnLink> : <PrimaryBtn>{btnText}</PrimaryBtn>)}
    {secBtnText &&
      (secBtnLink ? (
        <PrimaryBtnLink href={secBtnLink}>{secBtnText}</PrimaryBtnLink>
      ) : (
        <PrimaryBtn>{secBtnText}</PrimaryBtn>
      ))}
  </div>
);

const InfoCardBase: React.FC<InfoCardProps & { variant: 'orange' | 'white' }> = ({
  variant,
  title,
  imgSrc,
  mainTitle,
  paragraphs,
  buttonText,
  buttonLink,
  secondBtnText,
  secondBtnLink,
  pagesLinks,
  pagesLinksContainerClassName,
  imgClassName,
  contentContainerClassName,
  className,
  ...props
}) => {
  const isOrange = variant === 'orange';

  return (
    <div
      className={cn(
        'flex w-11/12 mx-auto py-8 px-2 lg:p-0 lg:py-[99px] items-stretch justify-center lg:flex-row gap-4 lg:gap-[57px]',
        isOrange ? 'flex-col-reverse bg-secondaryLight' : 'flex-col',
        className
      )}
      {...props}
    >
      <div className="flex flex-col w-full h-auto lg:flex-1">
        {typeof imgSrc === 'string' ? (
          <img className={cn('w-full rounded-lg object-cover h-full', imgClassName)} src={imgSrc} alt={title} />
        ) : (
          <div className="w-full h-full">
            <ImageCarousel images={imgSrc} />
          </div>
        )}
        {pagesLinks && (
          <div className={cn('flex max-w-full mt-[33px] flex-wrap', pagesLinksContainerClassName)}>
            {pagesLinks.map(({ name, path }) => (
              <div key={path} className="text-[#1C1C1C] opacity-40 text-[13px] flex gap-2 pr-2">
                <Link className="hover:text-primaryDefault" href={path}>
                  {name}
                </Link>
                <span>|</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={cn('flex flex-col px-3 lg:px-0 gap-2 lg:gap-[33px] h-full flex-1 w-full', contentContainerClassName)}
      >
        <div className="flex flex-col gap-[11px]">
          {mainTitle && <H2 className="text-primaryDefault">{mainTitle}</H2>}
          <h3 className="text-[24px] text-primaryDefault font-semibold leading-[37px]">{title}</h3>
          <div className="flex flex-col gap-1 lg:gap-3">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={`${index}`}>{paragraph}</BodyText>
            ))}
          </div>
        </div>
        {(buttonText || secondBtnText) && (
          <CardButtonGroup
            btnText={buttonText}
            btnLink={buttonLink}
            secBtnText={secondBtnText}
            secBtnLink={secondBtnLink}
          />
        )}
      </div>
    </div>
  );
};

export const OrangeInfoCard: React.FC<InfoCardProps> = (props) => <InfoCardBase {...props} variant="orange" />;
export const WhiteInfoCard: React.FC<InfoCardProps> = (props) => <InfoCardBase {...props} variant="white" />;

export const WhyGreenTeamCard: React.FC<WhyGreenTeamCardProps> = ({ icon, paragraphs, title }) => (
  <div className="flex lg:min-h-[350px] flex-col py-[33px] h-full gap-[11px] px-[22px] rounded-[10px] border-2 border-black10 border-opacity-10 max-w-[387px]">
    <div className="flex items-center gap-3">
      {icon}
      <HeadlineSemibold className="text-primaryDefault">{title}</HeadlineSemibold>
    </div>
    <div className="flex flex-col gap-8">
      {paragraphs.map((paragraph, index) =>
        isValidElement(paragraph) ? paragraph : <BodyText key={`${index}`}>{paragraph}</BodyText>
      )}
    </div>
  </div>
);
