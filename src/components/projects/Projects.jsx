import { useState } from "react";
import { Features } from "./Features";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="relative mb-36 flex h-full w-full bg-slate-700 p-20">
      <div className="ml-40">
        <h1 className="rounded-full border-2 border-black p-10 text-9xl font-semibold transition-transform duration-300 hover:scale-125">
          Work
        </h1>
      </div>
      <div>
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Project"
            className="absolute left-[26%] top-80 h-auto w-[40%] transition-transform duration-300 hover:scale-125"
          />
        )}
      </div>
      <div className="absolute right-32 top-0 flex flex-col">
        <div>
          {Features.map((feature, index) => (
            <Link
              to={feature.link}
              key={feature.id}
              onMouseEnter={() => setHoveredImage(feature.image)}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <motion.h3
                  className="mt-16 border-b border-black py-10 text-8xl"
                  whileHover={{ translateX: 40 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.name}
                </motion.h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
