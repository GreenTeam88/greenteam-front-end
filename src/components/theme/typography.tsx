import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const HeadlineSemibold: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <h5 className={cn(className, 'headlineSemibold')} {...props}>
      {children}
    </h5>
  );
};

export const HeadlineSemiboldLink: React.FC<{ className?: string; href: string; children: React.ReactNode }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={cn('font-bold text-[16px] leading-[20px] tracking-[-2%]', className)} {...props}>
      {children}
    </Link>
  );
};

export const DetailsTypography: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'detailsTypography')} {...props}>
      {children}
    </p>
  );
};

export const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ className, children, ...props }) => {
  return (
    <h2 className={cn(className, 'H2')} {...props}>
      {children}
    </h2>
  );
};

export const BodyTextSemibold: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'bodyTextSemibold')} {...props}>
      {children}
    </p>
  );
};

export const BodyTextBold: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn('text-[13px] font-bold leading-[20px] tracking-[-2%]', className)} {...props}>
      {children}
    </p>
  );
};
// yahya : i changed p to div to avoid the errors
export const BodyText: React.FC<HTMLAttributes<HTMLHeadingElement> & { key?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(className, 'bodyText')} {...props}>
      {children}
    </div>
  );
};

export const LinkTypography: React.FC<HTMLAttributes<HTMLAnchorElement> & { href?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a className={cn('font-bold text-[11px] leading-[20px] tracking-[-2%]', className)} {...props}>
      {children}
    </a>
  );
};

export const H1: React.FC<JSX.IntrinsicElements['h1']> = ({ className, children, ...props }) => {
  return (
    <h2 className={cn('text-[30px] lg:text-[40px] font-bold leading-[42px] tracking-[-2%]', className)} {...props}>
      {children}
    </h2>
  );
};
