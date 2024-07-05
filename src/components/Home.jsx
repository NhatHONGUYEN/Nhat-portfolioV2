import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Projects from "./projects/Projects";
import Section from "../animation/Section";

export default function Home() {
  return (
    <>
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
