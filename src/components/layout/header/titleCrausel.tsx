import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const titles = ['Liever iemand spreken? Bel 085 401 93 45', 'paragraph2', 'Title 3', 'Title 4'];

export function TitleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={{ position: 'relative', height: '50px', width: '600px' }}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            top: '50%',
            width: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          <p className="font-semibold w-full text-center  -translate-y-1/2 text-[22px] text-primaryGreenD1">
            {titles[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
