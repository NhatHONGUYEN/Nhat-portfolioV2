import FlipLink from "../animation/FlipLink";
import { SocialIcons } from "../utils/SocialIcons";

export default function Contact() {
  return (
    <>
      <section
        className="grid grid-cols-1 gap-8 bg-slate-500 py-24 md:grid-cols-2"
        id="contact"
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div className="text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
            <FlipLink href="#">Let's</FlipLink>
            <FlipLink href="#">Work</FlipLink>
            <FlipLink href="#">Together</FlipLink>
          </div>
        </div>
        <div className=" border-l-2 pl-36 ">
          <div className="grid max-w-3xl grid-cols-2 items-center">
            <div className="flex flex-col text-left">
              <h1 className=" mb-4 text-4xl font-bold">Contacts</h1>
              <a
                href="mailto:hnnhat67@gmail.com"
                className=" mb-4 text-xl hover:text-slate-200 "
              >
                hnnhat67@gmail.com
              </a>
              <a
                href="tel:0769577467"
                className=" mb-4 text-xl hover:text-slate-200 "
              >
                +33 7 69577467
              </a>
            </div>
            <div className="text-left">
              <h1 className=" mb-4 text-4xl font-bold">Socials</h1>
              <div className="flex flex-col">
                {SocialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="mb-4 text-xl hover:text-slate-200"
                  >
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{icon.name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:order-1 md:mt-28 md:text-left">
            <p className="text-xs leading-5  md:text-base lg:text-lg">
              &copy; 2024 Nhat, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
