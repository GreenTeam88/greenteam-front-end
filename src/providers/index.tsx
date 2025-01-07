import { ReactQueryProvider } from './reactQuery';

// a component that wraps all the providers (in case there is more than one provider in the future)

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
