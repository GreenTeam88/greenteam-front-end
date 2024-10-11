export type StandardCardInfo = {
  title: string;
  paragraph: string;
  img: string;
};

export const StandardCard: React.FC<StandardCardInfo> = ({ title, img, paragraph }) => {
  return (
    <div className="flex gap-[52px] items-center">
      <img src={img} className="rounded-[10px]" />
      <div className="flex flex-col max-w-[488px] gap-[11px]">
        <h3 className="font-medium text-[25px] leading-[37px] text-primaryDefault tracking-[-2%]">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
