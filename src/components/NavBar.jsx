import { useState } from "react";
import { Link } from "react-scroll";
import BurgerMenu from "./BurgerMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar absolute left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent text-slate-50">
        <a className="btn btn-ghost text-xl">Nhat</a>
        <div className="flex justify-center">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <a className="btn btn-ghost text-xl">About</a>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <a className="btn btn-ghost text-xl">Work</a>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="btn btn-ghost text-xl">Contact</a>
          </Link>
        </div>
        <div></div>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
    </>
  );
}
