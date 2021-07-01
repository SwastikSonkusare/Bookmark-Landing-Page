import React from "react";

import illustrationHero from '../../assets/images/illustration-hero.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-section">
        <h1 className="header__title">A Simple Bookmark Manager</h1>
        <p className="header__paragraph">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div className="header__buttons">
            <button className="btn btn--2">Get it on chrome</button>
            <button className="btn btn--3">Get it on firefox</button>
        </div>
      </div>
      <div className="header__right-section">
          <img className="header__image" src={illustrationHero} alt={illustrationHero}></img>
      </div>
    </header>
  );
};

export default Header;
