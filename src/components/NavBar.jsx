import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import BurgerMenu from "./BurgerMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar absolute left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent text-slate-50">
        <a className="btn btn-ghost text-xl">Nhat</a>
        <div className="flex justify-center">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <a className="mr-4 transform cursor-pointer text-xl transition-transform duration-300 hover:text-slate-950">
              About
            </a>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <a className="mr-4 transform cursor-pointer text-xl transition-transform duration-300 hover:text-slate-950">
              Work
            </a>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="mr-4 transform cursor-pointer text-xl transition-transform duration-300 hover:text-slate-950">
              Contact
            </a>
          </Link>
        </div>
        <div></div>
        {isScrolled && (
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
            className="fixed right-0 top-0"
          />
        )}
      </div>
    </>
  );
}
