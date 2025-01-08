import { pagesMap } from '@/config/pages';
import TraprenovatiesPage from '../traprenovatie/page';

function ThankYouPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  return pagesMap[searchParams.page];
}

export default ThankYouPage;
