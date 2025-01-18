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
  const rotationDuration = 2;
  const waitBetweenIcons = 3;
  const totalIcons = boldGreenLocations.length;
  const sequence = index * (rotationDuration + waitBetweenIcons);
  const totalCycleDuration = totalIcons * (rotationDuration + waitBetweenIcons);

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
      }}
      className="relative"
    >
      {/* making some translate-x in order to put the icons at their origin positions */}
      <div className=" translate-x-[14px]">
        {/* making the motion.div's width 1px so the animation animates at the top instead of the bottom  */}

        <motion.div
          className="w-[1px]  bg-red-400 relative"
          animate={{ rotate: [0, 30, -30, 15, -15, 0] }}
          style={{
            transformOrigin: 'bottom',
          }}
          transition={{
            duration: rotationDuration,
            repeat: Infinity,
            delay: sequence,
            repeatDelay: totalCycleDuration - (rotationDuration + sequence),
            ease: 'easeInOut',
          }}
        >
          <img
            src={type === 'bold' ? '/contact/mapHQBoldGreen.png' : '/contact/mapHQLightGreen.png'}
            className="min-w-[29px] z-10 -translate-x-1/2"
          />
          <img
            src={type === 'bold' ? '/contact/mapHQBoldGreenCenterIcon.png' : '/contact/mapHQLightGreenCenterIcon.png'}
            className="absolute min-w-[16px] left-1/2 z-20  -translate-x-1/2 top-[10px]"
          />
        </motion.div>
      </div>
    </div>
  );
};
export const HQMap = () => {
  return (
    <div className=" flex  items-center max-w-[95vw] justify-center  overflow-hidden">
      <div className="relative scale-75  lg:scale-100 min-w-[407.73px]  w-[407.73px] h-[483.56px]">
        <img src="/contact/netherlandsMap.webp" className="absolute top-0 left-0" />
        {boldGreenLocations.map((location, index) => (
          <HQUI key={index} {...location} index={index} />
        ))}
      </div>
    </div>
  );
};
