import FlipLink from "../animation/FlipLink";

export default function Contact() {
  return (
    <section className="grid grid-cols-2 gap-2 bg-slate-500 px-8 py-24 text-white">
      <div className="text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
        <FlipLink href="#">Let's</FlipLink>
        <FlipLink href="#">Work</FlipLink>
        <FlipLink href="#">Together</FlipLink>
      </div>
    </section>
  );
}
