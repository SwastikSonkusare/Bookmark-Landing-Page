import React from "react";

import illustrationFeatureTab1 from '../../assets/images/illustration-features-tab-1.svg';

import './Features.scss';

const Features = () => {
  return (
    <main className="main">
      <h2 className="card__header">Features</h2>
      <p className="main__paragraph">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="tab">
        <div className="tab__title">Simple Bookmarking</div>
        <div className="tab__title">Speedy Searching</div>
        <div className="tab__title">Easy Sharing</div>
      </div>

      <div className="main__container">
        <div className="main__left-section">
            <img className="main__image" src={illustrationFeatureTab1} alt={illustrationFeatureTab1}></img>
        </div>
        <div className="main__right-section">
          <h2 className="card__header">Bookmark in one click</h2>
          <p className="main__right-section-paragraph">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>

          <button className="btn btn--2">More info</button>
        </div>
      </div>
    </main>
  );
};

export default Features;
