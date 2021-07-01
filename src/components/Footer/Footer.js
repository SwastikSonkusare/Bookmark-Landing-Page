import React from "react";

import faceBookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';

import LogoSvg from "../LogoSvg/LogoSvg";

import "./Footer.scss";
const Footer = () => {
    const color = "#fff";

  const ulItems = ["features", "pricing", "contact"];
  const icons = [faceBookIcon, twitterIcon]

  return (
    <footer className="footer">
      <div className="footer__container">
        <LogoSvg color={color} />

        <ul className="footer__items">
          {ulItems.map((item) => (
            <li className="footer__item">
              <a href="#" className="footer__links">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__icons">
            {icons.map((icon) => (
                <img className="footer__icon" src={icon} alt={icon}></img>
            ))}
      </div>
    </footer>
  );
};

export default Footer;
