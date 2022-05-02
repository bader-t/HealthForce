import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="ContainerCard">
      <img src={props.imgUrl}></img>

      <h2>{props.title}</h2>

      <p>{props.desc}</p>
    </div>
  );
};
export default Card;
