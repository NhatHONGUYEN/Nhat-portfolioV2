import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div className="z-1000 flex h-[50px] w-full justify-between bg-white p-4  ">
      <Link
        to="/"
        className="z-1000 cursor-pointer text-lg font-bold"
        onClick={() => (window.location.href = "/")}
      >
        NHAT
      </Link>
      <div className="hidden md:block">
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
      <div ref={node} className="block md:hidden">
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
