import React, { useState } from "react";

import { tabContents } from "../../assets/data";

import "./Features.scss";

const Features = () => {

    const [toggleState, setToggleState] = useState("Simple Bookmarking");

    
    const tabBtnHandler = (index) =>{
        setToggleState(index)

    }


  return (
    <main className="main">
      <h2 className="card__header">Features</h2>
      <p className="main__paragraph">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="tab">
        {tabContents.map((item, index) => (
          <button className={toggleState === item.title ?  "tab__title active" : "tab__title"} onClick={() =>tabBtnHandler(item.title)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="main__container">
        {tabContents.map((item, index) => (
          <div className={toggleState === item.title ? "main__left-section active" : "main__left-section"}>
            <img
              className="main__image"
              src={item.image}
              alt={item.image}
            ></img>
          </div>
        ))}
        <div className="main__right-section">
          {tabContents.map((item, index) => (
            <div className={toggleState === item.title ?  "main__content active" : "main__content"}>
              <h2 className="card__header">{item.header}</h2>
              <p className="main__right-section-paragraph">{item.paragraph}</p>
            </div>
          ))}

          <button className="btn btn--2">More info</button>
        </div>
      </div>
    </main>
  );
};

export default Features;
