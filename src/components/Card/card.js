import React from "react";
import "./style.css";

const Card = props => (
  <div
    className="card"
    clicked="false"
    onClick={() => props.onClick(props.id)}
    // onClick={() => {
    //   // console.log(props.simpsons);
    //   // props.clicked
    //   // Card.clicked = "true";
    //   // props.simpShuffle(props.simpsons);
    // }}
  >
    <img alt={props.name} src={props.image} className="cardPic" />
  </div>
);

export default Card;
