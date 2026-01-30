import { HiOutlineMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigationLinks = [
    { name: "Home", location: "/" },
    { name: "About", location: "/about" },
    { name: "Contact", location: "/contact" },
    { name: "Projects", location: "/project" },
  ];

  return (
    <header className="sticky top-0 z-100 w-full border-b border-white/10 bg-ui-background/80 backdrop-blur-md px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 md:h-24">
        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/assets/logo.png"
            alt="ShekCode logo"
            className="w-28 sm:w-32 md:w-36 h-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-10">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.location;
              return (
                <Link
                  to={link.location}
                  key={link.name}
                  className={`relative px-2 py-1 transition-colors duration-300 group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-medium">
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #143296cc 0%, #ffffff 100%)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </ul>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block">
            <Button className="border border-white/10 px-6 py-5 bg-linear-to-t from-very-dark to-semi-opaque-blue rounded-xl text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform">
              Get In Touch
            </Button>
          </Link>

          {/* HAMBURGER */}
          <button
            className="lg:hidden p-2 text-white  border-semi-opaque-blue bg-linear-to-t from-very-dark to-semi-opaque-blue rounded-lg border "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 left-0 w-full z-[-1] bg-ui-background border-b border-semi-opaque-blue shadow-2xl pt-24 pb-12 px-6 rounded-b-[3rem]"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.location}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-bold text-white/80 hover:text-white transition-colors"
                  >
                    <div className="relative inline-block group">
                      {link.name}
                      <span
                        className={`absolute w-full left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 to-white transition-all duration-300 ${
                          location.pathname === link.location
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      ></span>
                    </div>
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="pt-4 sm:hidden"
              >
                <Button className="w-full border border-white/10 py-7 px-10 bg-gradient-to-t from-very-dark to-semi-opaque-blue rounded-2xl">
                  Get In Touch
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay/Backdrop to focus on the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-80"
            />

            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
    lg:hidden 
    absolute top-0 left-0 w-full 
    z-90
    bg-ui-background 
    border-b-2 border-semi-opaque-blue
    pt-12 pb-20 px-6
   rounded-bl-full rounded-br-full
   md:rounded-2xl
    shadow-[0_25px_50px_-12px_rgba(20,50,150,0.5)]
  "
            >
              {/* Flex container handles the vertical centering of all elements */}
              <div className="flex flex-col items-center justify-center space-y-10">
                {/* 1. THE TOGGLE BUTTON (Centered at the top) */}
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="p-3 text-white  border-semi-opaque-blue bg-linear-to-t from-very-dark to-semi-opaque-blue rounded border hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <BiX size={25} />
                </motion.button>

                {/* 2. THE NAVIGATION LINKS */}
                <nav className="flex flex-col items-center space-y-8">
                  {navigationLinks.map((link, i) => {
                    const isActive = location.pathname === link.location;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.2 }}
                      >
                        <Link
                          to={link.location}
                          onClick={() => setIsOpen(false)}
                          className={`relative text-sm font-light tracking-[0.2em] uppercase transition-all ${
                            isActive
                              ? "text-white"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-gradient"
                              className="absolute -bottom-3 left-0 w-full h-1 bg-[linear-gradient(to_right,#143296cc_0%,#143296cc_50%,#ffffff_50%,#ffffff_100%)]"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* 3. THE CTA BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="rounded-full px-10 py-7 border border-semi-opaque-blue bg-linear-to-t from-very-dark to-semi-opaque-blue font-bold text-sm hover:scale-105 transition-transform">
                      Let's Talk
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
