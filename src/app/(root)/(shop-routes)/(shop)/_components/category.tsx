import { SmallRightArrow } from '@/components/icons/arrows';

export const CategorySection: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex  px-2 lg:px-0 gap-2 w-full items-center py-8 ">
      <p className="text-xs">home</p>
      <SmallRightArrow />
      <p className="text-xs "> {category}</p>
    </div>
  );
};
