import PropTypes from "prop-types";
import { GrBottomCorner } from "react-icons/gr";
import BurgerButton from "./navbar/BurgerButton.jsx";
import LinksBurger from "./navbar/LinksBurger.jsx";
import IconFooter from "../reusable ui/IconFooter.jsx";
import BurgerCloseButton from "../reusable ui/BurgerCloseButton.jsx";

export default function BurgerMenu({ isMenuOpen, handleMenuToggle }) {
  return (
    <>
      {!isMenuOpen && (
        <div className="fixed right-10 top-10 z-50">
          <BurgerButton handleMenuToggle={handleMenuToggle} />
        </div>
      )}
      <div
        className={`fixed right-0 top-0 z-50 flex h-96 w-1/3 flex-col bg-slate-200 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute left-10 top-4 h-8 w-8 rounded-full bg-black"></div>
        <div className="absolute left-16 top-4 h-8 w-8 rounded-full bg-black"></div>
        <BurgerCloseButton handleMenuToggle={handleMenuToggle} />
        <LinksBurger handleMenuToggle={handleMenuToggle} />
        <div className="flex items-center justify-between p-10 text-slate-400">
          <div className="rotate-90 transform">
            <GrBottomCorner />
          </div>
          <IconFooter />
        </div>
      </div>
    </>
  );
}

BurgerMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
