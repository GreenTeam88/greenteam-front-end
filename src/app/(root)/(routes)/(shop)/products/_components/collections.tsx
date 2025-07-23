'use client';

import { useParams, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/tailwind';
import { storefrontClient } from '@/utils/shop/init';
import { shopifyRequest } from '@/utils/shop/query-tools';

export const CollectionsSection = ({ collections }: { collections: string[] }) => {
  const searchParams = useSearchParams();
  const selectedCollection = searchParams.get('collection');

  return (
    <div className="flex gap-2">
      {collections.map((collection) => (
        <div
          className={cn('text-sm font-semibold bg-[#F3F7F5] text-[#195B35] rounded-lg px-4 py-2 capitalize ', {
            'bg-[#195B35] text-white': selectedCollection === collection,
          })}
        >
          {collection}
        </div>
      ))}
    </div>
  );
};
