import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Service",
    "About",
    "Careers",
    "Intership",
    "Resources",
    "Contact",
  ];

  // Parent animation → slide from top
  const parentVariant = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Child animation → one-by-one delay
  const childVariant = {
    hidden: { opacity: 0, y: -20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // **each child delay 0.25s**
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <header
      className="
    fixed top-0 left-0 right-0 
    mx-auto px-5 md:px-10 py-2 xl:px-20
    text-gray-50 
   bg-[#000000]
    backdrop-blur-xl
    shadow-2xl
    z-50
  "
    >
      <nav className="mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <img src="/logo.png" alt="CYFOTOK INFOSEC" width={220} height={200} />

          <div className="hidden px-2 md:px-5 md:flex items-center space-x-2 md:space-x-4 xl:space-x-10 font-medium text-gray-300">
            {menuItems.map((k) => (
              <Link key={k} className="hover:text-gray-50 nav-link">{k}</Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-100 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="relative bg-[#000000] md:hidden flex flex-col space-y-3 px-4 py-10 text-gray-300"
              variants={parentVariant}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {menuItems.map((k, i) => (
                <motion.div key={k} custom={i} variants={childVariant}>
                  <Link
                    to="#"
                    className="px-2 py-2 block cursor-pointer hover:text-gray-50 hover:bg-[#2c0ba3] rounded-2xl transition-all duration-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {k}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
