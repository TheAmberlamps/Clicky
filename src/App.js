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
    console.log("Shuffled array: " + JSON.stringify(array));
  };

  // work in progress

  clickCheck = (id, score, highscore) => {
    for (var i = 0; this.state.clicked.length > i; i++) {
      if (this.state.clicked[i] === id) {
        console.log("game over!");
      } else {
        this.setState({ score: this.state.score + 1 });
        console.log("Current Score: " + this.state.score);
        // lol until i actually have something other than test values in clicked this is not going to move forwards as a function
        // console.log(this.state.clicked[i]);
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
              this.clickCheck();
              console.log("Current clicked array: " + this.state.clicked);
            }}
          />
        ))}
      </div>
    );
  }
}

export default App;
