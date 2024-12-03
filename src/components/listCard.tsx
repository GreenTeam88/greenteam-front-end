import { CheckedIcon } from '@/components/icons/check';
import { PrimaryBtnLink } from '@/components/theme/buttons';
import { BodyText, H2 } from '@/components/theme/typography';

type ListCardProps = {
  sectionName: string;
  pageName: string;
  listTitle: string;
  listItems: string[];
  orangeText: string;
  imgSrc: string;
  btnText: string;
  btnLink: string;
};

export const ListCard: React.FC<ListCardProps> = ({
  sectionName,
  btnLink,
  btnText,
  imgSrc,
  listItems,
  listTitle,
  orangeText,
  pageName,
}) => {
  return (
    <div className="flex px-3 flex-col w-full bg lg:items-center py-7 lg:py-6 lg:pb-[400px] gap-7 lg:gap-[100px] ">
      <p className="text-primaryDefault font-normal">
        {sectionName + '  '} <span className="font-bold">- {pageName}</span>{' '}
      </p>
      <div className="flex flex-col lg:flex-row  max-w-[1100px] gap-6  justify-between w-full items-center">
        <div className="flex flex-col gap-[33px] ">
          <div className="flex flex-col gap-14">
            <H2 className="text-primaryDefault">{listTitle}</H2>
            <div className="flex flex-col gap-[11px] ">
              {listItems.map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckedIcon /> <BodyText>{item}</BodyText>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <BodyText className="text-secondaryDefault">{orangeText}</BodyText>
            <PrimaryBtnLink href={btnLink}>{btnText}</PrimaryBtnLink>
          </div>
        </div>
        <img src={imgSrc} />
      </div>
    </div>
  );
};
