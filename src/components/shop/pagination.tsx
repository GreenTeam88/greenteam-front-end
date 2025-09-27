'use client';

import { PageInfo } from '@shopify/hydrogen-react/storefront-api-types';
import { useRouter, useSearchParams } from 'next/navigation';

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

const PaginationBackButton: React.FC<{ startCursor?: string | null; hasPreviousPage: boolean }> = ({
  hasPreviousPage,
  startCursor,
}) => {
  const params = useSearchParams();
  const router = useRouter();
  const handlePreviousPage = () => {
    const searchParams = new URLSearchParams(params.toString());
    if (!startCursor || !hasPreviousPage) return null;
    searchParams.set('cursor', startCursor);
    searchParams.set('direction', 'before');
    router.push('?' + searchParams.toString());
  };
  return (
    <div
      onClick={handlePreviousPage}
      className={cn('text-[#195B35] border flex items-center justify-center w-[40px] h-[40px] cursor-not-allowed', {
        'cursor-pointer': hasPreviousPage,
      })}
    >
      {' '}
      <TwoArrowsMoveIcon />
    </div>
  );
};

const PaginationNextButton: React.FC<{ afterCursor?: string | null; hasNextPage: boolean }> = ({
  afterCursor,
  hasNextPage,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleNextPage = () => {
    if (!afterCursor) return null;
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set('cursor', afterCursor);
    searchParams.set('direction', 'after');
    router.push('?' + searchParams.toString());
  };
  return (
    <div
      onClick={handleNextPage}
      className={cn(
        'text-[#195B35]  flex items-center w-[40px] h-[40px] justify-center rotate-180 border cursor-not-allowed',
        {
          'cursor-pointer': hasNextPage,
        }
      )}
    >
      {' '}
      <TwoArrowsMoveIcon />
    </div>
  );
};

export const Pagination: React.FC<PageInfo> = ({ endCursor, hasNextPage, hasPreviousPage, startCursor }) => {
  return (
    <div className="flex gap-2 pt-14 pb-7 w-full justify-center">
      <PaginationBackButton startCursor={startCursor} hasPreviousPage={hasPreviousPage} />
      {/* {Object.keys(productsPageConfig.pagesCursors).map((item) => (
        <PageUI pageNumber={Number(item)} />
      ))} */}
      <PaginationNextButton hasNextPage={hasNextPage} afterCursor={endCursor} />
    </div>
  );
};
