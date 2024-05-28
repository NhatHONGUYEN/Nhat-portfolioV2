import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

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
        <Link
          to="introduction"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mx-4 cursor-pointer  duration-500 hover:text-indigo-600"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mx-4  cursor-pointer duration-500 hover:text-indigo-600"
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mx-4 cursor-pointer duration-500 hover:text-indigo-600"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mx-4 cursor-pointer duration-500 hover:text-indigo-600"
        >
          Contact
        </Link>
      </div>
      <div ref={node} className="block md:hidden ">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}>
          <div className="mt-4 flex flex-col">
            <Link
              to="introduction"
              className="mx-4"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link to="about" className="mx-4" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="projects" className="mx-4" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="contact" className="mx-4" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </Menu>
      </div>
    </div>
  );
}
