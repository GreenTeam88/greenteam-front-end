import { SearchIcon } from '@/components/icons/search';

export const SearchProducts = () => {
  return (
    <div className="pb-3 pt-8 ">
      <div className="flex h-[40px]   w-[450px] border-solid border border-[#E5E5E5]  rounded-[20px]  ">
        <input placeholder="Zoekopdracht ..." className="w-full px-3 rounded-l-[20px]"></input>
        <div className="border-l border-[#E5E5E5] w-[50px] flex items-center justify-center">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
