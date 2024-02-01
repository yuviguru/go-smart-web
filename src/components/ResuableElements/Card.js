// src/components/Tile.js
import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        {/* {imageUrl && <img src={imageUrl} alt={title} />} */}
        <p className="title">{description[0]}<br/>{description[1]}<br/>{description[2]}<br/>{description[3]}</p>
        <p className="subtitle">{title}</p>
        <a className="view-details">View details</a>
      </article>
    </div>
  );
};

export default Card;
