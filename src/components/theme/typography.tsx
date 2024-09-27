import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/tailwind';

export const HeadlineSemibold: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => {
  return (
    <h5 className={cn(className, 'headlineSemibold')} {...props}>
      {children}
    </h5>
  );
};
