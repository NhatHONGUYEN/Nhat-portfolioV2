import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Menu({ open, setOpen }) {
  return (
    <div>
      {open ? (
        <>
          <div className="w-full h-full bg-white fixed top-0 right-0 z-50 ">
            <ul className="font-bold text-xl  h-screen flex flex-col items-center justify-center">
              <li className="p-4">
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="p-4">
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className="p-4">
                <Link to="/projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="p-4">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <RxCross1
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 cursor-pointer "
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
