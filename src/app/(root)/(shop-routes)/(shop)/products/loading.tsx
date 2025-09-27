export default function ProductsPageSkeleton() {
  return (
    <>
      <div className=" hidden lg:flex gap-3  w-full">
        <div className="min-w-[334px] h-[800px]  w-fit py-8 skeleton rounded-[13px] "></div>
        <div className="w-[1040px] flex flex-col gap-3 ">
          <div className="skeleton w-full h-[200px] "></div>
          <div className="skeleton w-full h-[1000px] "></div>
        </div>
      </div>
      <div className="flex flex-col px-2 gap-4 w-full ">
        {Array.from({ length: 3 }).map((_) => (
          <div className="skeleton w-full h-[380px]"></div>
        ))}
      </div>
    </>
  );
}
