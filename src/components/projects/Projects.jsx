import { Features } from "./Features";

export default function Projects() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </p>
            <p className="mt-4 text-gray-500">
              Voici une liste de petit projet que j'ai réalisé. Ils ne sont pas
              finalisé mais mon permis chacun de développer une compétence en
              particulier.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {Features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="aspect-h-2 aspect-w-5 cursor-pointer overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className=" object-cover object-center"
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
