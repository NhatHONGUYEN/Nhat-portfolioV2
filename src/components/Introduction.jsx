import { FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

export default function Introduction() {
  return (
    <div className=" h-full  w-full  p-8 pt-20 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-20 lg:pt-[15%] xl:pl-20 xl:pr-40 xl:pt-20 2xl:bg-gray-100 2xl:px-0 2xl:pt-0  ">
      <div className=" block h-full w-full  flex-row-reverse p-10 lg:flex lg:gap-10 xl:justify-center 2xl:h-[500px] 2xl:w-[80%] 2xl:items-center  2xl:justify-center    2xl:p-0  ">
        <div className="lg: text-3xl font-bold   ">
          <img
            className="h-45 rounded-custom   mx-auto  block h-full bg-orange-400 sm:w-1/2 lg:h-[80%] lg:w-full  2xl:h-[500px] 2xl:w-auto"
            src="/blackclothesprofil2.png"
            alt="blackclothesprofil"
          />
        </div>
        <div className="  block items-center  justify-center text-center sm:mx-40 lg:mx-0 lg:w-[45%]  lg:text-ellipsis lg:text-left 2xl:w-[30%]  ">
          <h1 className=" py-10 text-4xl font-bold lg:py-5 2xl:text-5xl   ">
            Front-End React developer
          </h1>
          <p className="py-2 2xl:w-[80%] 2xl:py-8 2xl:text-xl ">
            Nhat-Quan HO NGUYEN, <br /> passionné de front-end et en quête
            constante de connaissances .
          </p>
          <p className="flex justify-center py-3 text-3xl lg:justify-normal  lg:text-2xl 2xl:text-3xl ">
            <a
              href="https://github.com/NhatHONGUYEN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              className="ml-4  "
              href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </p>
          <div className="my-10 ">
            <p className="font-bold 2xl:text-2xl">Tech Stack</p>
            <div className=" flex justify-center p-4 text-3xl lg:justify-normal lg:p-0  lg:py-3 lg:text-2xl 2xl:text-3xl ">
              <FaHtml5 className="ml-4  lg:ml-0" />
              <IoLogoCss3 className="ml-4 " />
              <SiJavascript className="ml-4 " />
              <RiTailwindCssFill className="ml-4 " />
              <FaReact className="ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
