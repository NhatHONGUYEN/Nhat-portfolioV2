import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="w-full h-full bg-slate-600 ">
      <div className="text-center px-7 py-16 text-white">
        <div>Copyright © 2024 . All rights are reserved</div>
        <div className="text-3xl  flex justify-center items-center py-4">
          <IoLogoGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
