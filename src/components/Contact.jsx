import FlipLink from "../animation/FlipLink";
import Footer from "./footer/Footer";

export default function Contact() {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 bg-slate-500 py-24 text-white md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            <FlipLink href="#">Let's</FlipLink>
            <FlipLink href="#">Work</FlipLink>
            <FlipLink href="#">Together</FlipLink>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-lg md:text-2xl lg:text-3xl">
            <a
              href="mailto:hnnhat67@gmail.com"
              className="hover:text-beige mb-4 max-w-md rounded-full border-2 p-8 text-center transition-all duration-300 hover:rotate-6 md:mb-8"
            >
              hnnhat67@gmail.com
            </a>
            <a
              href="tel:0769577467"
              className="hover:text-beige max-w-md rounded-full border-2 p-8 text-center transition-all duration-300 hover:rotate-6"
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
