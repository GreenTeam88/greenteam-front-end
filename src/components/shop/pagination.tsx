'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { productsPageConfig } from '@/app/(root)/(shop-routes)/(shop)/products/config';
import { cn } from '@/lib/tailwind';
import { TwoArrowsMoveIcon } from '../icons/two-arrows-move';

const PageUI: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const params = useSearchParams();
  const currentPage = Number(params.get('page')) || 1;
  const isPageSelected = currentPage === pageNumber;
  const router = useRouter();
  const pageNavigate = () => {
    const searchParams = new URLSearchParams(params.toString());
    if (pageNumber === currentPage) return;
    searchParams.set('page', String(pageNumber));
    router.push('?' + searchParams.toString());
  };
  return (
    <div
      onClick={pageNavigate}
      className={cn('w-[40px] flex items-center justify-center h-[40px] ', {
        'bg-white text-[#195B35] cursor-pointer border-[#195B35] border': !isPageSelected,
        'bg-[#195B35] text-white': isPageSelected,
      })}
    >
      {pageNumber}
    </div>
  );
};

const PaginationBackButton: React.FC = () => {
  const params = useSearchParams();
  const currentPage = Number(params.get('page'));
  const router = useRouter();
  const handlePreviousPage = () => {
    const searchParams = new URLSearchParams(params.toString());
    if (!currentPage || currentPage < 2) return null;
    searchParams.set('page', String(currentPage - 1));
    router.push('?' + searchParams.toString());
  };
  return (
    <div
      onClick={handlePreviousPage}
      className={cn('text-[#195B35] border flex items-center justify-center w-[40px] h-[40px] cursor-not-allowed', {
        'cursor-pointer': currentPage > 1,
      })}
    >
      {' '}
      <TwoArrowsMoveIcon />
    </div>
  );
};

const PaginationNextButton: React.FC<{ pagesCount: number }> = ({ pagesCount }) => {
  const params = useSearchParams();
  const currentPage = Number(params.get('page')) || 1;
  const router = useRouter();
  const lastPage = Math.max(...Object.keys(productsPageConfig.pagesCursors).map((key) => Number(key)));
  const handleNextPage = () => {
    const searchParams = new URLSearchParams(params.toString());
    if (currentPage >= lastPage) return null;
    searchParams.set('page', String(currentPage + 1));
    router.push('?' + searchParams.toString());
  };
  return (
    <div
      onClick={handleNextPage}
      className={cn(
        'text-[#195B35]  flex items-center w-[40px] h-[40px] justify-center rotate-180 border cursor-not-allowed',
        {
          'cursor-pointer': currentPage < lastPage,
        }
      )}
    >
      {' '}
      <TwoArrowsMoveIcon />
    </div>
  );
};

export const Pagination: React.FC<{ pagesCount: number }> = ({ pagesCount }) => {
  return (
    <div className="flex gap-2 pt-14 pb-7 w-full justify-center">
      <PaginationBackButton />
      {Object.keys(productsPageConfig.pagesCursors).map((item) => (
        <PageUI pageNumber={Number(item)} />
      ))}
      <PaginationNextButton pagesCount={pagesCount} />
    </div>
  );
};
