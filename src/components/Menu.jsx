import { RxCross1 } from "react-icons/rx";

export default function Menu({ open, setOpen }) {
  return (
    <div>
      {open ? (
        <>
          <div className="w-full h-full bg-white fixed top-0 right-0 z-50 ">
            <ul className="font-bold  h-screen flex flex-col items-center justify-center">
              <li className="p-4">Home</li>
              <li className="p-4">About</li>
              <li className="p-4">Projects</li>
              <li className="p-4">Contact</li>
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
