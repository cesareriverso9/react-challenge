import React, { useState } from "react";
import placeholder from "./placeholder.png";
import "./card.styles.css";

const Card = ({ card }) => {
  const [isOver, setOver] = useState(false);
  const {
    social_media_pages: { picture },
    source_items: { name, id },
  } = card;

  return (
    <li
      onMouseLeave={() => {
        setOver(false);
      }}
      onMouseEnter={() => {
        setOver(true);
      }}
      className="card"
    >
      <div className="wrapper">
        <img src={picture || placeholder} alt={name} title={name} />
      </div>
      {isOver && (
        <div className="hover">
          <p>{id}</p>
        </div>
      )}
    </li>
  );
};

export default Card;
