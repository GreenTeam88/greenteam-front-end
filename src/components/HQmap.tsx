'use client';

import { motion } from 'framer-motion';

type HQLocation = {
  top: number;
  left: number;
  type: 'bold' | 'light';
};

// defining all the locations
const boldGreenLocations: HQLocation[] = [
  {
    top: 41.36,
    left: 266.51,
    type: 'bold',
  },
  {
    top: 90.34,
    left: 344.56,
    type: 'bold',
  },
  {
    top: 111,
    left: 151,
    type: 'bold',
  },
  {
    top: 138.51,
    left: 218,
    type: 'bold',
  },
  {
    top: 194,
    left: 109,
    type: 'bold',
  },
  {
    top: 204.92,
    left: 287.55,
    type: 'bold',
  },
  {
    top: 216.62,
    left: 191.12,
    type: 'bold',
  },
  {
    top: 247,
    left: 119,
    type: 'light',
  },
  {
    top: 311,
    left: 187.7,
    type: 'bold',
  },
  {
    top: 322.07,
    left: 38.48,
    type: 'bold',
  },
  {
    top: 362.99,
    left: 274.59,
    type: 'bold',
  },
];

const HQUI: React.FC<HQLocation & { index: number }> = ({ left, top, type, index }) => {
  const duration = 1;
  const totalIcons = boldGreenLocations.length;
  // the deley should be according to the duration of the animation and how many locations we have
  const sequence = index * duration;

  return (
    <motion.div
      style={{ position: 'absolute', top, left }}
      className="relative"
      initial={{ rotate: 0 }}
      animate={{
        rotate: [0, 40, -40, 30, -30, 20, -20, 10, -10, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: sequence,
        repeatDelay: (totalIcons - 1) * duration, // Wait for other animations to complete
        ease: 'easeInOut',
      }}
    >
      <img src={type === 'bold' ? '/contact/mapHQBoldGreen.png' : '/contact/mapHQLightGreen.png'} />
      {/* defigning the center icon   */}
      <img
        src={type === 'bold' ? '/contact/mapHQBoldGreenCenterIcon.png' : '/contact/mapHQLightGreenCenterIcon.png'}
        className="absolute  left-1/2 -translate-x-1/2 top-[10px]"
      />
    </motion.div>
  );
};

export const HQMap = () => {
  return (
    <div className="relative w-[407.73px] h-[483.56px]">
      <img src="/contact/netherlandsMap.png" className="absolute border top-0 left-0" />
      {boldGreenLocations.map((location, index) => (
        <HQUI key={index} {...location} index={index} />
      ))}
    </div>
  );
};
