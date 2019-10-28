import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/card.js";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons,
    score: 0,
    hiscore: 0
  };

  render() {
    return (
      <div className="container">
        <img
          id="titleText"
          src="/images/simptitle.png"
          alt="simpsons memory game"
          border="0"
        />
        {this.state.simpsons.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
