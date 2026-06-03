import Image from 'next/image';

import { CheckedIcon } from '@/components/icons/check';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';
import CTAButtons from './CTAButtons';

type FeatureListSectionProps = {
  sectionName: string;
  pageName: string;
  listTitle: string;
  listItems: string[];
  orangeText: string;
  imgClassName?: string;
  imgSrc: string;
};

export const FeatureListSection: React.FC<FeatureListSectionProps> = ({
  sectionName,
  imgSrc,
  imgClassName,
  listItems,
  listTitle,
  orangeText,
  pageName,
}) => {
  return (
    <div className="flex pb-10 px-3 flex-col w-full lg:items-center py-1 lg:py-6 lg:pb-[100px] gap-[30px] lg:gap-[100px]">
      <p className="font-normal text-primaryDefault ">
        <span>{sectionName} </span>
        <span className="font-bold">- {pageName}</span>
      </p>
      <div className="flex flex-col lg:flex-row lg:items-stretch max-w-[1100px] gap-6 justify-between w-full">
        <div className="flex flex-col gap-[33px] ">
          <div className="flex flex-col gap-[15px] lg:gap-[33px]">
            <H2 className="text-primaryDefault">{listTitle}</H2>
            <div className="flex flex-col  gap-[11px] ">
              {listItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckedIcon /> <BodyText className="font-semibold !tracking-wide">{item}</BodyText>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <BodyText className="font-bold text-secondaryDefault">{orangeText}</BodyText>
            <CTAButtons />
          </div>
        </div>
        <div className={cn('rounded-lg h-auto lg:w-1/3 w-full relative overflow-hidden', imgClassName)}>
          <Image src={imgSrc} alt={pageName} fill className="object-cover size-full" />
        </div>
      </div>
    </div>
  );
};
