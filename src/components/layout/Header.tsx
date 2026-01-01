import { HiOutlineMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigationLinks = [
    { name: "Home", location: "/" },
    { name: "About", location: "/" },
    { name: "Contact", location: "/" },
    { name: "Projects", location: "/" },
  ];

  return (
    <header className="border-b-2 border-semi-opaque-blue relative top-0 w-full px-3 py-2 md:px-10 lg:px-20 flex md:flex-row flex-col justify-between items-center">
      <div className="mt-4 md:mt-0">
        <div></div>
        <p className="text-xl">ShekCodes</p>
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
          {isOpen ? <HiOutlineMenu size={30} /> : <BiX size={30} />}
        </button>
        <Button
          variant="gradient"
          className="md:flex border mb-2 lg:mb-2 border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-very-dark to-semi-opaque-blue rounded-xl"
        >
          Get In Touch
        </Button>
      </div>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-50px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0, duration: 1.5, ease: "easeOut" }}
          className="md:hidden bg-ui-background absolute w-full z-9999 border-2 border-semi-opaque-blue py-6 rounded-bl-full rounded-br-full"
        >
          <div className="flex text-white flex-col items-center w-full px-4 py-4 space-y-4">
            <button
              className="lg:hidden bg-linear-to-t from-very-dark to-semi-opaque-blue p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineMenu size={30} /> : <BiX size={30} />}
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
    </header>
  );
};

export default Header;
