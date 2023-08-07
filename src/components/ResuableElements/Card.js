// src/components/Tile.js
import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        {/* {imageUrl && <img src={imageUrl} alt={title} />} */}
        <p className="title">{title}</p>
        <p className="subtitle">{description}</p>
      </article>
    </div>
  );
};

export default Card;
