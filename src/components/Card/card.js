import React from "react";
import "./style.css";

const Card = props => (
  <div
    className="card"
    clicked="false"
    onClick={() => {
      console.log(props.simpsons);
      Card.clicked = "true";
      // props.simpShuffle(props.simpsons);
    }}
  >
    <img alt={props.name} src={props.image} className="cardPic" />
  </div>
);

export default Card;
