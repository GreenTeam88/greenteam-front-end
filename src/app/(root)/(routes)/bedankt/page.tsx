import TraprenovatiesPage from '../traprenovatie/page';

function ThankYouPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  console.log('search params', searchParams);
  return <TraprenovatiesPage />;
}

export default ThankYouPage;
