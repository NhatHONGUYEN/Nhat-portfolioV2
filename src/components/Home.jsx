import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full p-4 block  ">
        <div className="text-3xl font-bold ">
          <img
            className="h-64 block mx-auto "
            src="/blackclothesprofil.png"
            alt="blackclothesprofil"
          />
        </div>
        <div className="  block items-center justify-center text-center">
          <h1 className=" py-4 text-3xl font-bold ">
            Front-End React developer
          </h1>
          <p className="py-4">
            Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante de
            connaissances pour créer des interfaces utilisateur attrayantes.
          </p>
          <p className="py-4 flex justify-center text-xl ">
            <IoLogoGithub /> <FaLinkedin className="ml-4" />
          </p>
          <p>Tech Stack</p>
          <div className="p-4 flex justify-center text-xls">
            <FaHtml5 className="ml-4" />
            <IoLogoCss3 className="ml-4" />
            <SiJavascript className="ml-4" />
            <RiTailwindCssFill className="ml-4" />
            <FaReact className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
