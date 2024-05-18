export default function About() {
  return (
    <div className="h-full w-full">
      <div className="  block h-full   w-full pt-10 lg:flex lg:h-screen  lg:items-center lg:justify-center xl:px-40  2xl:px-80  ">
        <img
          className="   mx-auto h-full w-full sm:w-1/2 lg:ml-20 lg:h-[500px] lg:w-1/2"
          src="/photo-profil.jpg"
          alt="photo-profil"
        />
        <div className="m-10 block items-center justify-center text-center sm:mx-40 lg:mx-20">
          <h2 className="py-4 text-xl font-bold">ABOUT ME</h2>
          <h1 className="text-2xl font-bold">
            Front-end Développeur basé sur Paris , France
          </h1>
          <p className="py-10">
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
