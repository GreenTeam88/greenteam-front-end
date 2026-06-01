import Link from 'next/link';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';
import { LoadingIcon } from '../icons/loading';

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
        <span className="flex items-center justify-center w-full text-white group hover:text-black">
          <svg
            className="w-5 h-5 mr-3 text-white animate-spin group-hover:text-black" // Loading spinner
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
        'bg-primaryDefault text-center hover:bg-secondaryDefault rounded-lg text-[#fff] font-medium py-[10.69px] px-[16px] text-[13px] w-fit h-fit transition-colors duration-300',
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
    <Link
      href={href}
      className={cn(
        'bg-secondaryDefault text-white hover:bg-primaryDefault transition-colors duration-300 rounded-lg text-center py-[10.69px] px-[16px] text-[13px] font-medium w-fit h-fit',
        className
      )}
    >
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

export const SmallSecondaryOutlinedBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }> = ({
  children,
  className,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        ' text-secondaryDefault border flex gap-2 hover:bg-secondaryDefault hover:text-white border-secondaryDefault rounded-sm font-bold text-[11px] px-[15px] py-[9px] text-center  w-fit h-fit',
        { 'text-opacity-80 cursor-not-allowed hover:text-secondaryDefault hover:bg-white': isLoading },
        className
      )}
      disabled={disabled !== undefined ? disabled : isLoading}
      {...props}
    >
      {children} {isLoading && <LoadingIcon />}
    </button>
  );
};
