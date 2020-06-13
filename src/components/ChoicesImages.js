import React from "react";

const choices = ["rock", "paper", "scissors"];
// const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

// If I use line 3 & 4 in the global scope the function below flops. When used locally it works. Why?

class ChoicesImages extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice = () => {
    const { name } = this.props;

    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    if (name === cpuChoice) {
      console.log(`Player: ${name}. CPU: ${cpuChoice} DRAW.`); // draw works.
      // this.setState(this.props.userScore = this.props.userScore + 1) --> How can I change the state?
    } else if (
      (name === "rock" && cpuChoice === "scissors") ||
      (name === "paper" && cpuChoice === "rock") ||
      (name === "scissors" && cpuChoice === "paper")
    ) {
      console.log(`Player: ${name}. CPU: ${cpuChoice} WIN.`);
    } else console.log(`Player: ${name}. CPU: ${cpuChoice} LOSE.`);
  };

  // Depending on the outcome of the duel, a message needs to be displayed (win? loss? draw?)

  render() {
    return (
      <button onClick={this.handleChoice}>
        <img src={this.props.image} alt={this.props.name} />
      </button>
    );
  }
}

export default ChoicesImages;
