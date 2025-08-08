import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from '../svg/ArrowUp';

export const ScrollTopButton = () => {
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        console.log('fglhd');
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    const el = document.getElementById('section-hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="scroll-top-btn w-12 h-12 fixed right-[25px] bottom-6 bg-black cursor-pointer rounded-xs"
          onClick={handleScrollTop}
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
