import React, { useRef } from "react";

import Sidebar from "../Sidebar/Sidebar";

import { ulItems } from "../../assets/data";

import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import LogoSvg from "../LogoSvg/LogoSvg";

import "./Navbar.scss";
const Navbar = () => {
  const color = "#242A45";

  const sidebarRef = useRef();

  const sidebarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <>
      <Sidebar sidebarRef={sidebarRef} />

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

          <div className="navbar__button">
            <button className="btn btn--1">Login</button>
          </div>
        </div>

        <div className="navbar__hamburger" onClick={sidebarHandler}>
          <img src={hamburgerIcon} alt={hamburgerIcon} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
