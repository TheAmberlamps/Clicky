import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <img alt={props.name} src={props.image} className="cardPic" />
  </div>
);

export default Card;
