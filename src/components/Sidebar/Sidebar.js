import React from "react";

import closeIcon from "../../assets/images/icon-close.svg";

import { ulItems } from "../../assets/data";

import "./Sidebar.scss";

const Sidebar = ({ sidebarRef }) => {
  const closeSideBarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar__toggle">
        <img src={closeIcon} alt={closeIcon} onClick={closeSideBarHandler} />
      </div>

      <ul className="navbar__items">
        {ulItems.map((item) => (
          <li className="navbar__item">
            <a href="#" className="navbar__links">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button className="btn btn--1">Login</button>
    </aside>
  );
};

export default Sidebar;
