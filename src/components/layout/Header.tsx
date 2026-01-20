import { HiOutlineMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", location: "/" },
    { name: "About", location: "/" },
    { name: "Contact", location: "/" },
    { name: "Projects", location: "/" },
  ];

  return (
    <header className="border-b-2 border-semi-opaque-blue relative top-0 w-full px-3 py-4 md:px-10 lg:px-20 flex md:flex-row flex-col justify-between items-center">
      <div className="flex items-center">
        <img
          src="/assets/logo.png"
          alt="ShekCode logo"
          className="
      w-28
      sm:w-32
      md:w-36
      lg:w-40
      h-auto
      object-contain
    "
        />
      </div>
      <nav className="hidden lg:flex items-center justify-items">
        <ul className="flex gap-20 text-text font-thin">
          {navigationLinks.map((link) => (
            <Link
              to={link.location}
              key={link.name}
              className="hover:text-white text-sm"
            >
              <div className="relative inline-block group pb-2">
                {link.name}
                <span className="absolute w-full left-0 bottom-0 h-1 bg-[linear-gradient(to_right,#143296cc_0%,#143296cc_50%,#ffffff_50%,#ffffff_100%)] transition-all duration-300"></span>
              </div>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          className="lg:hidden bg-linear-to-t from-very-dark to-semi-opaque-blue p-1  mt-2 lg:mt-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <HiOutlineMenu size={30} /> : <BiX size={30} />}
        </button>
        <Button
          variant="gradient"
          className="md:flex border mb-2 lg:mb-2 border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-very-dark to-semi-opaque-blue rounded-xl"
        >
          Get In Touch
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="
            lg:hidden 
            bg-ui-background 
            absolute 
            top-0 left-0
            w-full
            z-9999
            border border-semi-opaque-blue
            py-6
          
            /* Mobile shape */
            rounded-bl-full rounded-br-full
          
            /* Tablet shape */
            md:top-22
            md:left-1/2 md:-translate-x-1/2
            md:w-[85%]
            md:rounded-2xl
            md:shadow-xl
          "
          >
            <div className="flex text-white flex-col items-center w-full px-4 py-4 space-y-4">
              <button
                className="lg:hidden bg-linear-to-t from-very-dark to-semi-opaque-blue p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? <HiOutlineMenu size={30} /> : <BiX size={30} />}
              </button>
              {navigationLinks.map((link) => (
                <Link
                  to={link.location}
                  key={link.name}
                  className="hover:text-white"
                >
                  <div className="relative inline-block group pb-2">
                    {link.name}
                    <span className="absolute w-full left-0 bottom-0 h-1 bg-[linear-gradient(to_right,#143296cc_0%,#143296cc_50%,#ffffff_50%,#ffffff_100%)] transition-all duration-300"></span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
