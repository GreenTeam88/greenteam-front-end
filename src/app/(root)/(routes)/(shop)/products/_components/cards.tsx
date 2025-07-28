import { GiftIcon } from 'lucide-react';

export const ProductCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[282px] h-[282px] relative">
        <img className="w-full h-full absolute  rounded-t-lg " />
        <div className="bg-[#D3E0D9] top-2 left-[6px] py-2 px-3">
          <GiftIcon />
          <p className="text-black ">Bestseller</p>
        </div>
        <button className="w-[253px] h-[30px] flex items-center justify-center bg-[#D3E0D9]">
          400 en 500 cm breed
        </button>
      </div>
    </div>
  );
};
