import React from "react";

const choices = ["rock", "paper", "scissors"];

class ChoicesImages extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice = () => {
    const { name } = this.props;

    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    if (name === cpuChoice) {
        
     return this.props.incrementDraw()
      
    } else if (
      (name === "rock" && cpuChoice === "scissors") ||
      (name === "paper" && cpuChoice === "rock") ||
      (name === "scissors" && cpuChoice === "paper")
    ) {
     return this.props.incrementUser(name);
     
    } else
  return  this.props.incrementCpu(name);
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

