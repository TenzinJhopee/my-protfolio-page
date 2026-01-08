"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";

const navItems = ["experience", "achievements", "blog", "contact"];

const Navbar: React.FC = () => {
  const [play] = useSound("/sounds/click.mp3", { volume: 0.2 });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    play();
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-black shadow-md"
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo */}
        <h2 className="text-xl font-bold text-black dark:text-zinc-50">
          [ཆབ་དལ་ཚང་]
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black dark:text-zinc-50">
          {navItems.map((section) => (
            <li key={section}>
              <motion.a
                whileHover={{ scale: 1.1, color: "#2563EB" }}
                whileTap={{ scale: 0.95 }}
                onClick={play}
                href={section === "blog" ? "/blog" : `#${section}`}
                className="cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((section) => (
                <li key={section}>
                  <a
                    onClick={handleClick}
                    href={section === "blog" ? "/blog" : `#${section}`}
                    className="block text-lg font-medium text-black dark:text-zinc-50"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
