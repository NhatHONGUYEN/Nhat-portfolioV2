import { FaHtml5, FaReact } from "react-icons/fa";
import InfiniteText from "../animation/InfiniteText";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Introduction() {
  const icons = [
    { id: 1, icon: <FaHtml5 />, label: "HTML" },
    { id: 2, icon: <FaReact />, label: "React JS" },
    { id: 4, icon: <RiTailwindCssFill />, label: "Tailwind Css" },
    { id: 3, icon: <TbBrandFramerMotion />, label: "Framer Motion" },
  ];

  return (
    <div
      className="relative  h-screen w-full overflow-hidden"
      id="introduction"
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-700 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="lg:grid-cols-16 mx-auto max-w-7xl lg:grid lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="   max-w-md">
            <div className=" hidden text-white sm:mt-32 sm:flex lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 transition-transform duration-300 hover:translate-x-4 hover:translate-y-4 hover:scale-125"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="ml-20">
              <h1 className="mt-24  text-4xl tracking-normal text-slate-50 sm:mt-10 sm:text-5xl">
                Développeur Front-End
              </h1>

              <div className="mx-auto mt-10 flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6 md:gap-y-0">
                <a
                  className="group relative inline-flex  items-center overflow-hidden  py-3 text-3xl font-bold text-slate-950  "
                  href="#"
                >
                  <div className="flex items-center justify-center space-x-4  ">
                    {icons.map((item) => (
                      <div
                        className="flex flex-col items-center transition-transform duration-300 group-hover:rotate-180 "
                        key={item.id}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-40">
          <img
            alt=""
            src="/profilpic.png"
            className="aspect-[3/2] w-full bg-transparent object-cover object-right-top lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 m-0 md:-bottom-10 lg:bottom-8">
        <InfiniteText
          text="Nhat-Quan HO NGUYEN - Nhat-Quan HO NGUYEN -  "
          speed={0.02}
        />
      </div>
    </div>
  );
}
