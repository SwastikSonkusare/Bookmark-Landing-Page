import React, { useRef, useState } from "react";

import { accordionContents } from "../../assets/data";

import "./Faq.scss";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentBx = useRef();

  const accordionHandler = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = accordionContents.map((accordionContent, index) => {

      const active = index === activeIndex ? "active" : "null";

    return (
      <div
        ref={contentBx}
        className={`accordion__contentBx ${active}`}
        onClick={() => accordionHandler(index)}
      >
        <div className="accordion__label">{accordionContent.question}</div>
        <div className="accordion__content">
          {accordionContent.answer}
        </div>
      </div>
    );
  });


  return (
    <div className="faq">
      <h2 className="card__header">Frequently Asked Questions</h2>

      <p className="faq__paragraph">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="accordion">
            {renderedItems}
      </div>

      <button className="btn btn--2">More Info</button>
    </div>
  );
};

export default Faq;
