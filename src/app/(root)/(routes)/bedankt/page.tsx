import { Hero } from '@/components/hero';
import { PhoneNumberSection } from '@/components/phoneNumberSection';
import { ContactSection } from '../_components/contactSection';
import TraprenovatiesPage from '../traprenovatie/page';

function ThankYouPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  console.log('search params', searchParams);
  return <TraprenovatiesPage />;
}

export default ThankYouPage;
