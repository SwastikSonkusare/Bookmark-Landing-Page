import React from "react";

import { cardContents } from "../../assets/data";

import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      <h2 className="card__header">Download the extension</h2>

      <p className="card__paragraph">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="card__container">
        {cardContents.map((cardContent) => (
          <div className="card__content">
            <img
              className="card__image"
              src={cardContent.image}
              alt={cardContent.image}
            ></img>
            <h3 className="card__title">{cardContent.title}</h3>
            <small className="card__version">{cardContent.version}</small>
            <div className="card__button-container">
              <button className="btn btn--2 card__button">
                Add & Install Extension
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
