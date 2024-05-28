export default function About() {
  return (
    <div className="relative bg-gray-900" id="about">
      <div className="relative h-80 overflow-hidden pt-8 md:absolute  md:left-0 md:h-full md:w-1/3 md:pt-0 lg:w-1/2">
        <img
          className="h-full w-full object-contain"
          src="/photo-profil.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            ABOUT ME
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Front-end Développeur basé sur Paris , France
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            En reconversion professionnelle, je suis passionné par le
            développement front-end et motivé pour apprendre et maîtriser les
            technologies web telles que HTML, CSS, JavaScript et React. Je suis
            ouvert aux opportunités de collaboration et de travail sur des
            projets épanouissants. Contactez-moi pour discuter de vos idées.
          </p>
        </div>
      </div>
    </div>
  );
}
