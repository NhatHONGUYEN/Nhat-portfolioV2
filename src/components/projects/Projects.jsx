import { Features } from "./Features";

export default function Projects() {
  return (
    <div className="bg-white" id="projects">
      <div className="mx-auto max-w-screen-xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-7xl px-4 lg:max-w-none">
          <div className="max-w-7xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl 2xl:text-5xl">
              Projects
            </p>
            <p className="mt-4 text-gray-500  2xl:py-4 2xl:text-xl">
              Voici une liste de petit projet que j'ai réalisé. Ils ne sont pas
              finalisé mais mon permis chacun de développer une compétence en
              particulier.
            </p>
          </div>

          <div className="2xl: mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {Features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 "
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900 2xl:pt-4  2xl:text-3xl ">
                    {feature.name}
                  </h3>
                  <p className="mt-2 max-w-6xl text-sm text-gray-500 2xl:pt-4 2xl:text-xl ">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" ml-60  cursor-pointer overflow-hidden rounded-lg bg-gray-100   ">
                      <img
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className=" max-h-[500px] w-full transform object-cover object-center transition duration-500 hover:scale-110  "
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
