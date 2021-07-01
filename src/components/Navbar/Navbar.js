import React from "react";

import LogoSvg from "../LogoSvg/LogoSvg";



import "./Navbar.scss";
const Navbar = () => {
  const color = "#242A45";
  const ulItems = ["features", "pricing", "contact"];

  return (
    <nav className="navbar">
      <LogoSvg color={color} />

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
