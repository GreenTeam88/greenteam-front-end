'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SearchIcon } from '@/components/icons/search';
import { useProductsPageStatus } from '@/store/products';

export const SearchProducts = () => {
  const [value, setValue] = useState('');
  const { set } = useProductsPageStatus();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    set({ searchProducts: true });
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value) params.delete('title');
      // add/update title param
      else params.set('title', value);

      router.push(`${pathname}?${params.toString()}`);
    }, 3000); // 3 seconds debounce

    return () => clearTimeout(timer);
  }, [value, router, pathname, searchParams]);

  return (
    <div className="pb-3 pt-8 max-w-full">
      <div className="flex h-[40px] w-full lg:w-[450px] border border-[#E5E5E5] rounded-lg">
        <input
          placeholder="Zoekopdracht ..."
          className="w-full px-3 rounded-l-[20px]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="border-l border-[#E5E5E5] w-[50px] flex items-center justify-center">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
