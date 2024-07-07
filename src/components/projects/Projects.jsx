import { useState } from "react";
import { Features } from "./Features";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div
      className="relative mx-auto flex h-full w-full items-center justify-between bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4 sm:px-6  lg:px-80 lg:py-40"
      id="work"
    >
      <div className="hidden lg:block">
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Project"
            className="h-[500px] w-[500px] object-cover transition-transform duration-300 hover:rotate-12 hover:scale-125"
          />
        )}
      </div>
      <div className="mt-10  font-extrabold text-white md:mt-0">
        <h3 className="rounded-full border-2 p-10 text-9xl">Work</h3>
        <ul role="list" className="mt-6 space-y-4 text-5xl">
          {Features.map((feature, index) => (
            <Link
              to={feature.link}
              key={feature.id}
              onMouseEnter={() => setHoveredImage(feature.image)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <motion.h3
                  className="mt-16 border-b border-white py-10"
                  whileHover={{ translateX: 40 }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.name}
                </motion.h3>
              </motion.div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
