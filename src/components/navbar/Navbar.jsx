import { useState } from "react";
import { Link } from "react-scroll";
import ScrollLink from "../../animation/ScrollLink";
import BurgerNav from "./BurgerNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="  fixed  z-50 flex h-[50px]  w-full  items-center justify-between bg-white p-4  shadow-sm 2xl:h-[80px]   ">
      <Link
        to="introduction"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className=" semi-bold cursor-pointer text-lg duration-500 hover:text-indigo-600  2xl:text-3xl "
      >
        NhAT
      </Link>
      <div className="hidden md:block 2xl:text-xl">
        <ScrollLink to="introduction" offset={50} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="about" offset={50} duration={500}>
          About
        </ScrollLink>
        <ScrollLink to="projects" offset={50} duration={500}>
          Projects
        </ScrollLink>
        <ScrollLink to="contact" offset={50} duration={500}>
          Contact
        </ScrollLink>
      </div>
      {/* BURGER MENU */}
      <BurgerNav open={open} setOpen={setOpen} />
    </div>
  );
}
