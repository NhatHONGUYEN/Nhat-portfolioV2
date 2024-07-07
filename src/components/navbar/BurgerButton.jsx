import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BurgerButton = ({ handleMenuToggle }) => (
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
);

BurgerButton.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};

export default BurgerButton;
