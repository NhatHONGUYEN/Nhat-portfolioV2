import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Projects from "./Projects";

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
