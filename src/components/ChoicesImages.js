import React from "react";

// const choices = ["rock", "paper", "scissors"];
// const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
// If I use line 3 & 4 in the global scope the function below flops. When used locally it works. Why?

class ChoicesImages extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice = (event) => {
    const choices = ["rock", "paper", "scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]; 

    if (event === cpuChoice) {
      console.log(`Player: ${event}. CPU: ${cpuChoice} DRAW.`); // draw works.
    // this.setState(this.props.userScore = this.props.userScore + 1) --> How can I change the state?

    } else if (

      (event === choices[0] && cpuChoice === "scissors") ||
      (event === choices[1] && cpuChoice === "rock") ||
      (event === choices[2] && cpuChoice === "paper")
    ) {
      console.log(`Player: ${event}. CPU: ${cpuChoice} WIN.`);
    } else console.log(`Player: ${event}. CPU: ${cpuChoice} LOSE.`);
  };

  render() {
    return (
      <button onClick={() => this.handleChoice(this.props.name)}>
        <img src={this.props.image} alt={this.props.name} />
      </button>
    );
  }
}

export default ChoicesImages;
