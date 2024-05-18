import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div className=" fixed  flex justify-between p-4 w-full h-[50px] shadow-sm bg-white">
      <Link
        to="/"
        className="text-lg font-bold z-1000 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        NHAT
      </Link>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
