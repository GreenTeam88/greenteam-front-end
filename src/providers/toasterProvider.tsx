'use client';

import React from 'react';
import { Toaster } from 'sonner';

export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Toaster richColors={true} />
      {children}
    </>
  );
};
