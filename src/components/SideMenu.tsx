import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useClickAway } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

type Route = {
  name: string;
  id: string;
};

type SideMenuProps = {
  routes: Route[];
};

export const SideMenu = ({ routes }: SideMenuProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setOpen(false);
  });

  const handleRouteClick = (route: string) => {
    const el = document.getElementById(route);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      setOpen(false);
    }, 740);
  };

  return (
    <div ref={ref} className="relative h-full flex items-center">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={isOpen ? 'close menu' : 'open menu'}
        aria-expanded={isOpen}
        className={clsx(
          'menu-button sm:pl-2 h-[42px] cursor-pointer border flex items-center font-bold text-sm tracking-[2px] bg-black fixed right-[25px] md:right-8 lg:right-10 z-15',
          isOpen && ' border-white/50'
        )}
      >
        <span className="text-[#b8a269] hidden sm:inline">MENU</span>
        <Hamburger toggled={isOpen} color="white" size={25} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed w-[280px] bottom-0 top-0 bg-[#0C0C0C] right-0 z-10 font-body"
          >
            <ul className="text-white flex flex-col gap-2 pt-32 pl-8">
              {routes.map((route, index) => (
                <motion.li
                  key={route.id}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + index * 0.1,
                  }}
                >
                  <button
                    onClick={() => handleRouteClick(route.id)}
                    className="nav-btn capitalize text-lg font-semibold cursor-pointer py-2"
                  >
                    {route.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
