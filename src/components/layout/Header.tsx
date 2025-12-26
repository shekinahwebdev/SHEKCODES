import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigationLinks = [
    { name: "Home", location: "/" },
    { name: "About", location: "/" },
    { name: "Contact", location: "/" },
    { name: "Projects", location: "/" },
  ];

  return (
    <header className="border-2 px-3 py-2 md:px-10 lg:px-20 flex flex-row justify-between items-center">
      <div className="">
        <div></div>
        <p className="text-xl">ShekCodes</p>
      </div>

      <nav className="hidden lg:flex items-center justify-items">
        <ul className="border-2 border-red-500 flex gap-10 text-text">
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </ul>
      </nav>

      <div className="md:hidden">
        <HiOutlineMenu size={25} />
      </div>

      <Button
        variant="gradient"
        className="hidden md:flex border border-semi-opaque-blue py-5 px-5 bg-linear-to-t from-very-dark to-semi-opaque-blue get-started-button"
      >
        Get In Touch
      </Button>
    </header>
  );
};

export default Header;
