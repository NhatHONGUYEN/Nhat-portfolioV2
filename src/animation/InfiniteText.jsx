import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const InfiniteText = ({ text, speed = 0.1 }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  const direction = useRef(-1);

  const { contextSafe } = useGSAP();

  const animate = contextSafe(() => {
    if (xPercent < -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });
    }

    xPercent += speed * direction.current;
    requestAnimationFrame(animate);
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          scrub: 0.35,
          onUpdate: (e) => (direction.current = e.direction * -1),
        },
        x: "-=300px",
      });
    }

    requestAnimationFrame(animate);
  }, [animate]);

  console.log("rerender");

  return (
    <div className="z-[10] h-[320px] w-full">
      <div className="absolute">
        <div ref={slider} className="relative m-0 flex whitespace-nowrap">
          <h1
            ref={firstText}
            className="m-0 mr-10 text-4xl   text-white md:text-6xl lg:text-[200px] dark:text-white  "
          >
            {text}
          </h1>
          <h1
            ref={secondText}
            className="m-0 mr-10 text-4xl   text-white md:text-6xl lg:text-[200px] dark:text-white "
          >
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

InfiniteText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

export default InfiniteText;
