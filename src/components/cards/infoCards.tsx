export type StandardCardInfo = {
  title: string;
  paragraph: string;
  img: string;
};

export const StandardCard: React.FC<StandardCardInfo> = ({ title, img, paragraph }) => {
  return (
    <div className="flex gap-4 lg:gap-[52px] flex-col lg:flex-row items-center">
      <img src={img} className="w-full lg:w-fit rounded-[10px]" />
      <div className="flex flex-col max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] text-primaryDefault tracking-[-2%]">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
