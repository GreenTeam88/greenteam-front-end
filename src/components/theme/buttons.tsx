import { HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const PrimaryBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('primaryBtn', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const PrimaryOutlinedBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('primaryOutlinedBtn w-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const SecondaryBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('secondaryBtn', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const SecondaryOutlinedBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn('secondaryOutlinedBtn', className)} {...props}>
      {children}{' '}
    </button>
  );
};
