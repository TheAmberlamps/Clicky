import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/card.js";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    clicked: [],
    simpsons,
    score: 0,
    hiscore: 0
  };

  // Why length -1?

  simpShuffle = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  clickCheck = (clicked, id, score, highscore) => {
    for (var i = 0; clicked.length > i; i++) {
      if (clicked[i].value === id) {
        console.log("game over!");
      } else {
        console.log("Score + 1");
      }
    }
  };

  peekAboo = id => {
    console.log(id);
  };

  // powerMove = () => {
  //   this.simpShuffle();
  //   this.peekAboo();
  // };

  render() {
    return (
      <div className="container">
        <img
          id="titleText"
          src="/images/simptitle.png"
          alt="simpsons memory game"
          // border="0"
        />
        {this.simpShuffle(simpsons)}
        {console.log("This is a regular console log" + simpsons)}
        {/* {this.peekAboo()} */}
        {this.state.simpsons.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            onClick={() => {
              this.simpShuffle(simpsons);
              this.peekAboo(simpsons);
              this.state.clicked.push("test");
              console.log(this.state.clicked);
            }}
          />
        ))}
      </div>
    );
  }
}

export default App;
