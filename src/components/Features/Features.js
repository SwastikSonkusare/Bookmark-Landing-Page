import React, { useRef, useState } from "react";

import { tabContents } from "../../assets/data";

import "./Features.scss";

const Features = () => {
    const tabBtn = useRef();
    const imagesRef = useRef();
    const content = useRef();

    const [toggleState, setToggleState] = useState("Simple Bookmarking");

    
    const tabBtnHandler = (index) =>{
        // const id = e.target.dataset.id;

        // if(id) {
        //     tabBtn.forEach((btn) =>{
        //         btn.classList.remove("active");
        //         e.target.classList.add("active")
        //     })

        //     content.forEach((singleContent) => {
        //         singleContent.remove("active");
        //     })

        //     imagesRef.forEach((image) => {
        //         image.remove("active");
        //     })
        // }

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
          <button className="tab__title" data-id={item.title} ref={tabBtn} onClick={() =>tabBtnHandler(item.title)}>
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
              id={item.title}
              ref={imagesRef}

            ></img>
          </div>
        ))}
        <div className="main__right-section">
          {tabContents.map((item, index) => (
            <div id={item.title} className={toggleState === item.title ?  "main__content active" : "main__content"} ref={content}>
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
