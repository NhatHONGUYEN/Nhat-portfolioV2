export default function About() {
  return (
    <div className="h-full w-full">
      <div className="  block h-full   w-full  pt-10 lg:flex  lg:h-screen lg:items-center lg:justify-center  xl:px-40   2xl:ml-[15%]  2xl:w-[70%] 2xl:gap-10 2xl:pt-0  ">
        <img
          className="mx-auto h-full w-full transform transition  duration-500 hover:rotate-12 hover:scale-[1.2] sm:w-1/2 lg:ml-20 lg:h-[500px]  lg:w-1/2 2xl:ml-0  2xl:h-[500px] 2xl:w-auto "
          src="/photo-profil.jpg"
          alt="photo-profil"
        />
        <div className="m-10 block items-center justify-center text-center sm:mx-40 lg:mx-20 2xl:mx-auto 2xl:w-[50%]  ">
          <h2 className="py-4 text-xl font-bold 2xl:text-2xl">ABOUT ME</h2>
          <h1 className="text-2xl font-bold 2xl:text-3xl">
            Front-end Développeur basé sur Paris , France
          </h1>
          <p className="py-10  2xl:text-xl">
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
