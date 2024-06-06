import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const MenuItem = ({ label, targetLink, icon: Icon }) => {
  return (
    <NavLink
      to={targetLink}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary  hover:text-white ${
          isActive ? "bg-primary  text-white" : "text-gray-600"
        }`
      }
      end
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  label: PropTypes.string,
  targetLink: PropTypes.string,
  icon: PropTypes.elementType,
};
export default MenuItem;
