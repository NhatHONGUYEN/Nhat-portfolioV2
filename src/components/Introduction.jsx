import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

export default function Introduction() {
  return (
    <div className="w-full h-full pt-20 p-8 ">
      <div className="w-full h-full  block  ">
        <div className="text-3xl font-bold  ">
          <img
            className="h-45 rounded-custom   bg-orange-400  block mx-auto"
            src="/blackclothesprofil2.png"
            alt="blackclothesprofil"
          />
        </div>
        <div className="  block items-center justify-center text-center">
          <h1 className=" py-10 text-4xl font-bold ">
            Front-End React developer
          </h1>
          <p className="py-2">
            Nhat-Quan HO NGUYEN, <br /> passionné de front-end et en quête
            constante de connaissances .
          </p>
          <p className="py-3 flex justify-center text-3xl ">
            <a
              href="https://github.com/NhatHONGUYEN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              className="ml-4"
              href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </p>
          <div className="my-10">
            <p className="font-bold">Tech Stack</p>
            <div className="p-4 flex justify-center text-3xl ">
              <FaHtml5 className="ml-4" />
              <IoLogoCss3 className="ml-4" />
              <SiJavascript className="ml-4" />
              <RiTailwindCssFill className="ml-4" />
              <FaReact className="ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
