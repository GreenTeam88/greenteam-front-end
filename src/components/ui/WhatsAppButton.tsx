'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

/**
 * 2026-05-29
 * @author abdelhafid
 * @returns JSX
 */
export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const REFRESH_INTERVAL = 60000; // each minute

  React.useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      // relaying on dutch time regardless of where the user is located
      const nlTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
      const day = nlTime.getDay();
      const hour = nlTime.getHours();

      // monday 1 to friday 5
      const isWeekday = day >= 1 && day <= 5;

      // 09:00 to 17:00
      const isWorkingHours = hour >= 9 && hour < 17;

      setIsVisible(isWeekday && isWorkingHours);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          href="https://wa.me/31685681036"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 bottom-6 right-6"
        >
          <Image
            src="/WhatsApp.svg"
            alt="WhatsApp Contact"
            className="w-16 h-16 transition-transform duration-300 hover:scale-110"
            width={64}
            height={64}
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
