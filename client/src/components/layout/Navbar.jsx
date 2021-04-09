import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">
            {" "}
            <i class="fas fa-h-square"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fas fa-user-alt"></i> About
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i class="fas fa-registered"></i> Register
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i class="fas fa-sign-in-alt"></i>
            {" "}Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
