import About from "./About";
import Contact from "./Contact";

import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
