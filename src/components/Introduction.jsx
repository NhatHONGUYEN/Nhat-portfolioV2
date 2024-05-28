import { FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

export default function Introduction() {
  return (
    <div className="h-screen bg-white">
      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex"></div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Front-End React developer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nhat-Quan HO NGUYEN, passionné de front-end et en quête constante
              de connaissances
              <div className="flex pt-8 text-2xl">
                <a
                  className=" transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600  "
                  href="https://github.com/NhatHONGUYEN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
                <a
                  className="ml-4  transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600  "
                  href="https://www.linkedin.com/in/nhat-quan-ho-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <p className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ">
                Tech Stack
              </p>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <div className=" flex text-2xl  leading-8 text-gray-600">
                  <IoLogoCss3 className=" transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600  " />
                  <SiJavascript className="ml-4  transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600 " />
                  <RiTailwindCssFill className="ml-4  transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600 " />
                  <FaReact className="ml-4 transition-all duration-500 hover:-translate-y-5 hover:text-indigo-600  " />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
            <img
              src="../../public/blackclothesprofil2.png"
              alt=""
              className="max-h-96 w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
