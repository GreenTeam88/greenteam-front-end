type Color = {
  name: string;
  image: string;
};

const colors: Color[] = [
  {
    image: '/experience/colors/color-1.png',
    name: 'color 1',
  },
  {
    image: '/experience/colors/color-2.png',
    name: 'color 2',
  },
  {
    image: '/experience/colors/color-3.png',
    name: 'color 4',
  },
  {
    image: '/experience/colors/color-5.png',
    name: 'color 5',
  },
  {
    image: '/experience/colors/color-6.png',
    name: 'color 6',
  },
  {
    image: '/experience/colors/color-7.png',
    name: 'color 7',
  },
  {
    image: '/experience/colors/color-8.png',
    name: 'color 8',
  },
  {
    image: '/experience/colors/color-9.png',
    name: 'color 9',
  },
  {
    image: '/experience/colors/color-10.png',
    name: 'color 10',
  },
  {
    image: '/experience/colors/color-11.png',
    name: 'color 11',
  },
  {
    image: '/experience/colors/color-12.png',
    name: 'color 12',
  },
];

export const Colors = () => {
  return (
    <div className="flex px-2 border-t gap-7 border-[#E0E0E0] py-6 flex-wrap w-full flex-col">
      <div className="flex w-full gap-1 ">
        <div className="bg-primaryDefault w-[25px] h-[25px] rounded-[4px] text-sm text-white flex items-center justify-center ">
          1
        </div>
        <h3 className="text-text text-lg font-semibold">Kies uw kleurstalen (max. 3) </h3>
      </div>
      <div className="flex gap-8 w-full max-w-[1340px] flex-wrap">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col gap-2">
            <img src={color.image} className="w-[168px] h-[168px]" />
            <h3>{color.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
