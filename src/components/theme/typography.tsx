import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const HeadlineSemibold: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <h5 className={cn(className, 'headlineSemibold')} {...props}>
      {children}
    </h5>
  );
};

export const DetailsTypography: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'detailsTypography')} {...props}>
      {children}
    </p>
  );
};

export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'H2')} {...props}>
      {children}
    </p>
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
    <p className={cn(className, 'bodyTextBold')} {...props}>
      {children}
    </p>
  );
};

export const BodyText: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'bodyText')} {...props}>
      {children}
    </p>
  );
};

export const LinkTypography: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <p className={cn(className, 'link')} {...props}>
      {children}
    </p>
  );
};
