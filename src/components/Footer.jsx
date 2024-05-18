import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="w-full h-full bg-slate-600 ">
      <div className="text-center px-7 py-16 text-white">
        <div>Copyright © 2024 . All rights are reserved</div>
        <div className="text-3xl  flex justify-center items-center py-4">
          <a
            href="https://github.com/NhatHONGUYEN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nhatflux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
