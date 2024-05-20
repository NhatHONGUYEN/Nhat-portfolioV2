import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="h-full w-full bg-slate-600 ">
      <div className="px-7 py-16 text-center text-white 2xl:text-xl ">
        <div>Copyright © 2024 . All rights are reserved</div>
        <div className="flex  items-center justify-center py-4 text-3xl">
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
