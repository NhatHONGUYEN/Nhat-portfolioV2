import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./projects/Projects";
import Section from "../animation/Section";
import NavBar from "./NavBar";
import BurgerMenu from "./BurgerMenu";

export default function Home() {
  return (
    <>
      <BurgerMenu />
      <NavBar />
      <Section>
        <Introduction />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Contact />
      </Section>
    </>
  );
}
