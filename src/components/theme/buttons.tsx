import Link from 'next/link';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const PrimaryBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }> = ({
  children,
  className,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'primaryBtn text-center  w-fit h-fit',
        {
          'opacity-50 cursor-not-allowed': isLoading, // Styles for loading state
        },
        className
      )}
      disabled={isLoading} // Disable button when loading
      {...props}
    >
      {isLoading ? (
        <span className="flex w-full justify-center text-white group  hover:text-black items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white group-hover:text-black" // Loading spinner
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z" />
          </svg>
          Loading...
        </span>
      ) : (
        children // Display children when not loading
      )}
    </button>
  );
};
export const PrimaryOutlinedBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'py-[10.69px] px-[17.81px] text-center  rounded-sm bg-white hover:bg-primaryDefault hover:text-white border hover:border-white text-primaryDefault text-[13px] font-bold w-fit h-fit',
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
        'py-[10.69px] px-[17.81px] text-center  rounded-sm bg-white hover:bg-primaryDefault hover:text-white border hover:border-white text-primaryDefault text-[13px] font-bold w-fit h-fit',
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
        'text-secondaryDefault text-center  border hover:bg-secondaryDefault hover:text-white border-secondaryDefault rounded-sm font-bold text-[13px] px-[17.81px] py-[10.69px]',
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
        ' bg-primaryDefault text-center  hover:bg-transparent hover:text-primaryDefault border hover:border-primaryDefault rounded-sm text-[#fff] font-bold  py-[10.69px] px-[17.81px] text-[13px] w-fit h-fit',
        className
      )}
    >
      {children}{' '}
    </Link>
  );
};

export const SecondaryBtnLink: React.FC<{ className?: string; href: string; children: React.ReactNode }> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link href={href} className={cn('secondaryBtn  w-fit h-fit', className)}>
      {children}{' '}
    </Link>
  );
};

export const SecondaryBtn: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={cn('secondaryBtn text-center  w-fit h-fit', className)} {...props}>
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
    <button className={cn('secondaryOutlinedBtn text-center  w-fit h-fit', className)} {...props}>
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
    <button className={cn('smallSecondaryOutlinedBtn text-center  w-fit h-fit', className)} {...props}>
      {children}{' '}
    </button>
  );
};
