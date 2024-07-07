import FlipLink from "../animation/FlipLink";
import Footer from "./footer/Footer";

export default function Contact() {
  return (
    <>
      <section
        className="grid grid-cols-1 gap-8 bg-slate-500 py-24  md:grid-cols-2"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div className="text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            <FlipLink href="#">Let's</FlipLink>
            <FlipLink href="#">Work</FlipLink>
            <FlipLink href="#">Together</FlipLink>
          </div>
        </div>
        <div
          className="flex flex-col items-center
         justify-center border-l-2"
        >
          <div className="flex flex-col text-lg  lg:text-xl">
            <a
              href="mailto:hnnhat67@gmail.com"
              className="hover:text-beige mb-4 max-w-md  rounded-full bg-slate-50 p-3 text-center   transition-all duration-300 hover:bg-slate-800 hover:text-white md:mb-8 lg:p-8"
            >
              hnnhat67@gmail.com
            </a>
            <a
              href="tel:0769577467"
              className="hover:text-beige max-w-md  rounded-full bg-slate-50 p-3  text-center transition-all duration-300 hover:bg-slate-800 hover:text-white lg:p-8"
            >
              07 69 57 74 67
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
