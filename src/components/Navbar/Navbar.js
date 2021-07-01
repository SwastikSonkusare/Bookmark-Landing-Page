import React from "react";

import Logo from "../../assets/images/logo-bookmark.svg";

import "./Navbar.scss";
const Navbar = () => {
  const ulItems = ["features", "pricing", "contact"];

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt={Logo}></img>

      <div className="navbar__contents">
        <ul className="navbar__items">
          {ulItems.map((item) => (
            <li className="navbar__item">
              <a href="#" className="navbar__links">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="btn btn--1">
            Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
