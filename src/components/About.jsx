import { motion } from "framer-motion";
export default function About() {
  return (
    <div id="about" className="hero  relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="../../public/Introvideoshort2.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute h-full w-full bg-black bg-opacity-60"></div>
      <div className="hero-content">
        <motion.div
          className="max-w-4xl text-slate-50"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-10 text-7xl font-bold tracking-wide">About Me</h1>
          <p className="mb-5 text-3xl">
            En reconversion professionnelle, je suis passionné par le
            développement front-end et motivé pour apprendre et maîtriser les
            technologies web. Je suis ouvert aux opportunités de collaboration
            et de travail sur des projets épanouissants. <br /> Contactez-moi
            pour discuter de vos idées.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
