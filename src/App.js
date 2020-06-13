import React from "react";
import TitleBar from "./components/TitleBar";
import ScoreBoard from "./components/ScoreBoard";
import Actions from "./components/Actions";
import Message from "./components/DuelMessage";
import ResetButton from "./components/ResetButton";
import DuelOutcome from "./components/DuelOutcome";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userScore: 0,
      cpuScore: 0,
      draw: 0,
      outcome: "Click on an image to begin the game.",
    };
    this.incrementUserScore = this.incrementUserScore.bind(this);
    this.incrementCpuScore = this.incrementCpuScore.bind(this);
    this.incrementDraw = this.incrementDraw.bind(this);
    this.reset = this.reset.bind(this);
  }
  incrementUserScore = () => {
    this.setState((state) => {
      return { userScore: state.userScore + 1, outcome: "You win!" };
    });
  };

  // You lose! Rock is wrapped by paper!





  incrementCpuScore = () => {
    this.setState((state) => {
      return { cpuScore: state.cpuScore + 1, outcome: "You lose!" };
    });
  };

  incrementDraw = () => {
    this.setState((state) => {
      return { draw: state.draw + 1, outcome: "It's a draw." };
    });
  };

  reset = () => {
    this.setState((state) => {
      return { userScore: 0, cpuScore: 0, draw: 0, outcome: "Click on an image to begin the game." }; // refactor this?
    });
  };

  render() {
    // console.log(this.state.userScore);
    return (
      <div className="App">
        <TitleBar />
        <ScoreBoard
          userScore={this.state.userScore}
          cpuScore={this.state.cpuScore}
          draw={this.state.draw}
        />
        <DuelOutcome outcome={this.state.outcome} />
        <Actions
          incrementCpu={this.incrementCpuScore}
          incrementUser={this.incrementUserScore}
          incrementDraw={this.incrementDraw}
          outcome={this.state.outcome}
        />
        <Message />
        <ResetButton reset={this.reset} />
      </div>
    );
  }
}

export default App;
