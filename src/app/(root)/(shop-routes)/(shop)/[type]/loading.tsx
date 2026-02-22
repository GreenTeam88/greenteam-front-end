import { ProductsSkeleton } from '@/components/skeleton/products';

export default function ProductsPageSkeleton() {
  return (
    <>
      <div className=" hidden lg:flex gap-3  w-full">
        <div className="min-w-[334px] h-[800px]  w-fit py-8 skeleton rounded-[13px] "></div>
        <div className="w-[1040px] flex flex-col gap-3 ">
          <div className="skeleton w-full h-[200px] "></div>
          <div className="skeleton w-full h-[110px] "></div>
          <ProductsSkeleton />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-2">
        <div className="skeleton w-full rounded-lg h-[350px]"> </div>
        <div className="skeleton w-full rounded-lg h-[70px]"> </div>
        <div className="skeleton w-full rounded-lg h-[400px]"></div>
      </div>
    </>
  );
}
