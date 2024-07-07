import ScrollLinkBurger from "../../animation/ScrollLinkBurger";
import PropTypes from "prop-types";

const LinksBurger = ({ handleMenuToggle }) => {
  const navigationBurgerScroll = [
    { name: "Home", to: "introduction" },
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="px-10 pt-32 text-left">
      {navigationBurgerScroll.map((item) => (
        <ScrollLinkBurger
          key={item.name}
          to={item.to}
          onClick={handleMenuToggle}
        >
          {item.name}
        </ScrollLinkBurger>
      ))}
    </div>
  );
};

LinksBurger.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};

export default LinksBurger;
