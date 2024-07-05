import videoPortFolio1 from "/Portfoliovideo (1).mp4";
import videoPortFolio2 from "/Portfoliovideo (2).mp4";
import videoPortFolio3 from "/Portfoliovideo (3).mp4";
import videoPortFolio4 from "/Portfoliovideo (4).mp4";
import videoPortFolio5 from "/Portfoliovideo (5).mp4";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <div className="bg-slate-50-50 relative isolate h-full w-full">
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        ></div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:flex-row-reverse lg:items-center">
              <motion.div
                className="relative w-full max-w-xl lg:shrink-0 xl:max-w-md"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  ABOUT ME
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl">
                  En reconversion professionnelle, je suis passionné par le
                  développement front-end et motivé pour apprendre et maîtriser
                  les technologies web. Je suis ouvert aux opportunités de
                  collaboration et de travail sur des projets épanouissants.
                  Contactez-moi pour discuter de vos idées.
                </p>
              </motion.div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mr-20 lg:mt-0 lg:flex-row-reverse lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <video
                      alt=""
                      src={videoPortFolio1}
                      autoPlay
                      loop
                      muted
                      controls={false}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300  hover:translate-x-5 hover:scale-150"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <video
                      alt=""
                      src={videoPortFolio2}
                      autoPlay
                      loop
                      muted
                      controls={false}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300  hover:scale-150"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <video
                      alt=""
                      src={videoPortFolio3}
                      autoPlay
                      loop
                      muted
                      controls={false}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300  hover:scale-150"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <video
                      alt=""
                      src={videoPortFolio4}
                      autoPlay
                      loop
                      muted
                      controls={false}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300   hover:-translate-x-5 hover:scale-150"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <video
                      alt=""
                      src={videoPortFolio5}
                      autoPlay
                      loop
                      muted
                      controls={false}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-300   hover:-translate-x-5 hover:scale-150"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
