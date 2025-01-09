import { pagesMap } from '@/config/pages';

function ThankYouPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  return pagesMap[searchParams.page] || pagesMap['/'];
}

export default ThankYouPage;
