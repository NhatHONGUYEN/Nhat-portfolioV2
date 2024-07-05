import InfiniteText from "../animation/InfiniteText";

export default function Introduction() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-700 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className=" hidden text-white sm:mt-32 sm:flex lg:mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="ml-10">
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-slate-50 sm:mt-10 sm:text-3xl">
                Développeur Front-End
              </h1>

              <div className="mx-auto mt-10 flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6 md:gap-y-0">
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded bg-slate-200 px-8 py-3 font-bold text-slate-950 focus:outline-none focus:ring active:bg-slate-200"
                  href="#"
                >
                  <span className="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      className="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:ms-4">
                    {" "}
                    Check Stack{" "}
                  </span>
                </a>

                <a
                  className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 font-bold text-slate-200 focus:outline-none focus:ring active:text-slate-200"
                  href="#"
                >
                  <span className="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      className="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:ms-4">
                    {" "}
                    Learn More{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="../../public/profilpic.png"
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
