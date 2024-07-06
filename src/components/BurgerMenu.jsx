import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { Navigation } from "./footer/Navigation.jsx";
import { GrBottomCorner } from "react-icons/gr";
import { motion } from "framer-motion";

export default function BurgerMenu({ isMenuOpen, handleMenuToggle }) {
  return (
    <>
      {!isMenuOpen && (
        <div className="fixed right-10 top-10 z-50">
          <motion.button
            onClick={handleMenuToggle}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 rounded-full bg-slate-950 p-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      )}
      <div
        className={`fixed right-0 top-0 z-50 flex h-96 w-1/3 flex-col bg-slate-200 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute left-10 top-4 h-8 w-8 rounded-full bg-black"></div>
        <div className="absolute left-16 top-4 h-8 w-8 rounded-full bg-black"></div>
        <button className="absolute right-4 top-4" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-slate-700 transition-all duration-700 hover:rotate-180 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="px-10 pt-32 text-left ">
          <Link
            to="introduction"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="relative block cursor-pointer  text-4xl font-semibold text-slate-400 transition-all duration-300 hover:text-slate-900">
              Home
            </a>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <a className="relative block cursor-pointer  text-4xl font-semibold text-slate-400 transition-all duration-300 hover:text-slate-900">
              About
            </a>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
            <a className="relative block cursor-pointer  text-4xl font-semibold text-slate-400 transition-all duration-300 hover:text-slate-900">
              Work
            </a>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <a className="relative block cursor-pointer  text-4xl font-semibold text-slate-600 transition-all duration-300 hover:text-slate-900">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between p-10   text-slate-400">
          <div className="rotate-90 transform">
            <GrBottomCorner />
          </div>
          <div className="flex justify-center space-x-6  md:order-2 md:space-x-8">
            {Navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="rounded-full p-2 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-200"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-8 w-8 " aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

BurgerMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
