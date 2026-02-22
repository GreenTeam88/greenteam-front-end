export const ProductsSkeleton = () => {
  return (
    <div className="flex  flex-col lg:flex-row px-2 gap-4 w-full ">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="skeleton w-full h-[380px]"></div>
      ))}
    </div>
  );
};
