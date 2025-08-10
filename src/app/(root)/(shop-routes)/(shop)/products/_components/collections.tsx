'use client';

import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/tailwind';

export type ShopifyCollection = {
  title: string;
};

export const CollectionsSection = ({ collections }: { collections: ShopifyCollection[] }) => {
  const searchParams = useSearchParams();
  const selectedCollection = searchParams.get('collection');

  return (
    <div className="flex py-4 gap-2">
      {collections.map((collection) => (
        <div
          className={cn('text-sm font-semibold bg-[#F3F7F5] text-[#195B35] rounded-lg px-4 py-2 capitalize ', {
            'bg-[#195B35] text-white': selectedCollection === collection.title,
          })}
        >
          {collection.title}
        </div>
      ))}
    </div>
  );
};
