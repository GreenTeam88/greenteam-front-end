import Link from 'next/link';
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
    <button
      className={cn(
        'py-[10.69px] px-[17.81px] rounded-sm bg-white hover:bg-primaryDefault hover:text-white border hover:border-white text-primaryDefault text-[13px] font-bold w-fit h-fit',
        className
      )}
      {...props}
    >
      {children}{' '}
    </button>
  );
};

export const PrimaryOutlinedBtnLink: React.FC<{ className?: string; href: string; children: React.ReactNode }> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'py-[10.69px] px-[17.81px] rounded-sm bg-white hover:bg-primaryDefault hover:text-white border hover:border-white text-primaryDefault text-[13px] font-bold w-fit h-fit',
        className
      )}
    >
      {children}{' '}
    </Link>
  );
};

export const SecondaryOutlinedBtnLink: React.FC<{ className?: string; href: string; children: React.ReactNode }> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-secondaryDefault  border hover:bg-secondaryDefault hover:text-white border-secondaryDefault rounded-sm font-bold text-[13px] px-[17.81px] py-[10.69px]',
        className
      )}
    >
      {children}{' '}
    </Link>
  );
};

export const PrimaryBtnLink: React.FC<{ className?: string; href: string; children: React.ReactNode }> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        ' bg-primaryDefault hover:bg-transparent hover:text-primaryDefault border hover:border-primaryDefault rounded-sm text-[#fff] font-bold  py-[10.69px] px-[17.81px] text-[13px] w-fit h-fit',
        className
      )}
    >
      {children}{' '}
    </Link>
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
