import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div className=" flex  h-[50px] w-full items-center justify-between bg-white  p-4 2xl:h-[80px]   ">
      <Link
        to="/"
        className="z-1000 cursor-pointer text-lg font-bold 2xl:text-3xl "
        onClick={() => (window.location.href = "/")}
      >
        NHAT
      </Link>
      <div className="hidden md:block 2xl:text-xl">
        <Link to="/" className="mx-4">
          Home
        </Link>
        <Link to="/about" className="mx-4">
          About
        </Link>
        <Link to="/projects" className="mx-4">
          Projects
        </Link>
        <Link to="/contact" className="mx-4">
          Contact
        </Link>
      </div>
      <div ref={node} className="block md:hidden ">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}>
          <div className="mt-4 flex flex-col">
            <Link to="/" className="mx-4" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="mx-4" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link
              to="/projects"
              className="mx-4"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link to="/contact" className="mx-4" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </Menu>
      </div>
    </div>
  );
}
