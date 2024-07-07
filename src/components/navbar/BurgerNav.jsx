import { Link } from "react-scroll";
import Burger from "./Burger";
import Menu from "./Menu";
import PropTypes from "prop-types";

export default function BurgerNav({ open, setOpen }) {
  return (
    <div className="block md:hidden">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen}>
        <div className="mt-4 flex flex-col">
          <Link
            to="introduction"
            className="mx-4"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link to="about" className="mx-4" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="projects" className="mx-4" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link to="contact" className="mx-4" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </Menu>
    </div>
  );
}

BurgerNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
