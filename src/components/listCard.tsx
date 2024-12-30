import { CheckedIcon } from '@/components/icons/check';
import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';
import { cn } from '@/lib/tailwind';

type ListCardProps = {
  sectionName: string;
  pageName: string;
  listTitle: string;
  listItems: string[];
  orangeText: string;
  imgClassName?: string;
  imgSrc: string;
  btnText: string;
  btnLink: string;
};

export const ListCard: React.FC<ListCardProps> = ({
  sectionName,
  btnLink,
  btnText,
  imgSrc,
  imgClassName,
  listItems,
  listTitle,
  orangeText,
  pageName,
}) => {
  return (
    <div className="flex pb-10 px-3 flex-col w-full   lg:items-center py-1 lg:py-6 lg:pb-[200px] gap-[30px] lg:gap-[100px] ">
      <p className="text-primaryDefault font-normal ">
        {sectionName + '  '} <span className="font-bold">- {pageName}</span>{' '}
      </p>
      <div className="flex flex-col lg:flex-row  max-w-[1100px] gap-6  justify-between  w-full lg:items-center">
        <div className="flex flex-col gap-[33px] ">
          <div className="flex flex-col gap-[15px] lg:gap-[33px]">
            <H2 className="text-primaryDefault">{listTitle}</H2>
            <div className="flex flex-col  gap-[11px] ">
              {listItems.map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckedIcon /> <BodyText>{item}</BodyText>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <BodyText className="text-secondaryDefault font-bold">{orangeText}</BodyText>
            <PrimaryBtnLink href={btnLink}>{btnText}</PrimaryBtnLink>
          </div>
        </div>
        <img src={imgSrc} className={cn('rounded-lg', imgClassName)} />
      </div>
    </div>
  );
};
