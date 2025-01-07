'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { ToasterProvider } from './toasterProvider';

const queryClient = new QueryClient();

// react query provider , it should wrap the intire app so we can use react query tools in our app
export const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToasterProvider>
      {' '}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ToasterProvider>
  );
};
