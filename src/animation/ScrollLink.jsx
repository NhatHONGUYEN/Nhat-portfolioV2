import { Link } from "react-scroll";
import PropTypes from "prop-types";

const ScrollLink = ({ to, offset, duration, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={offset}
    duration={duration}
    className="mx-4 cursor-pointer duration-500 hover:text-indigo-600"
  >
    {children}
  </Link>
);

ScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollLink;
