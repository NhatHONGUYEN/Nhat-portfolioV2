import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div className="flex justify-between p-4 ">
      <p className="text-lg font-bold">NHAT</p>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
