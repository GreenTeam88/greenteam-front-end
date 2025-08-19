// the html of the pros and cons of the product

export type ProsAndConsItemData = { value: string; category: 'advantage' | 'disadvantage' };

export type ProsAndConsData = ProsAndConsItemData[];

const icons = {
  advantage: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0.202393C15.3516 0.202393 19.6875 4.53833 19.6875 9.88989C19.6875 15.2415 15.3516 19.5774 10 19.5774C4.64844 19.5774 0.3125 15.2415 0.3125 9.88989C0.3125 4.53833 4.64844 0.202393 10 0.202393ZM15.625 10.9836V8.79614C15.625 8.56177 15.3906 8.32739 15.1562 8.32739H11.5625V4.73364C11.5625 4.49927 11.3281 4.26489 11.0938 4.26489H8.90625C8.63281 4.26489 8.4375 4.49927 8.4375 4.73364V8.32739H4.84375C4.57031 8.32739 4.375 8.56177 4.375 8.79614V10.9836C4.375 11.2571 4.57031 11.4524 4.84375 11.4524H8.4375V15.0461C8.4375 15.3196 8.63281 15.5149 8.90625 15.5149H11.0938C11.3281 15.5149 11.5625 15.3196 11.5625 15.0461V11.4524H15.1562C15.3906 11.4524 15.625 11.2571 15.625 10.9836Z"
        fill="#195B35"
      />
    </svg>
  ),
  disadvantage: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0.202393C15.3516 0.202393 19.6875 4.53833 19.6875 9.88989C19.6875 15.2415 15.3516 19.5774 10 19.5774C4.64844 19.5774 0.3125 15.2415 0.3125 9.88989C0.3125 4.53833 4.64844 0.202393 10 0.202393ZM4.84375 11.4524H15.1562C15.3906 11.4524 15.625 11.2571 15.625 10.9836V8.79614C15.625 8.56177 15.3906 8.32739 15.1562 8.32739H4.84375C4.57031 8.32739 4.375 8.56177 4.375 8.79614V10.9836C4.375 11.2571 4.57031 11.4524 4.84375 11.4524Z"
        fill="#B7B7B7"
      />
    </svg>
  ),
};

export const ProsAndConsItemUI: React.FC<ProsAndConsItemData> = ({ category, value }) => {
  return (
    <div className="flex gap-2">
      {icons[category]}
      <p className="text-paragraph">{value}</p>
    </div>
  );
};

export const ProsAndConsBody = ({ prosAndConsData }: { prosAndConsData: ProsAndConsData }) => {
  return (
    <div className="flex flex-col py-7">
      <h3 className="text-paragraph text-[32px] font-medium ">Plus- en minpunten</h3>
      <div className="flex flex-col gap-1">
        {prosAndConsData.map((item) => (
          <ProsAndConsItemUI {...item} />
        ))}
      </div>
    </div>
  );
};
