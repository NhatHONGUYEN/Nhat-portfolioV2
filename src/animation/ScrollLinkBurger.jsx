import PropTypes from "prop-types";
import { Link } from "react-scroll";
const ScrollLinkBurger = ({ to, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
    onClick={onClick}
    className="relative block cursor-pointer text-4xl font-semibold text-slate-400 transition-all duration-300 hover:text-slate-900"
  >
    {children}
  </Link>
);

ScrollLinkBurger.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ScrollLinkBurger;
