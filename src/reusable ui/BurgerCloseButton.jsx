import PropTypes from "prop-types";

export default function BurgerCloseButton({ handleMenuToggle }) {
  return (
    <button className="absolute right-4 top-4" onClick={handleMenuToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-slate-700 transition-all duration-700 hover:rotate-180"
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
  );
}
BurgerCloseButton.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
