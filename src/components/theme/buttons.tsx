import { HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const PrimaryBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('primaryBtn w-fit h-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const PrimaryOutlinedBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('primaryOutlinedBtn  w-fit h-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const SecondaryBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('secondaryBtn  w-fit h-fit', className)} {...props}>
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
    <button className={cn('secondaryOutlinedBtn  w-fit h-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};

export const SmallSecondaryOutlinedBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn('smallSecondaryOutlinedBtn  w-fit h-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};
