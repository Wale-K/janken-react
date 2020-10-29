import React from "react";
import TitleBar from "./components/TitleBar";
import ScoreBoard from "./components/ScoreBoard";
import { Actions } from "./components/Actions";
import Message from "./components/DuelMessage";
import ResetButton from "./components/ResetButton";
import DuelOutcome from "./components/DuelOutcome";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  h1 {
    background-color: #29274c;
    margin-top: 0;
  }
  background-color: #7e52a0;

  color: #e6bccd;
`;

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

  incrementUserScore = (option) => {
    const rockVictory = "You win! Rock crushes scissors!";
    const paperVictory = "You win! Paper wraps rock!";
    const scissorsVictory = "You win! Scissors cuts paper!";
    let message = "";
    if (option === "rock") {
      message = rockVictory;
    }
    if (option === "paper") {
      message = paperVictory;
    }
    if (option === "scissors") {
      message = scissorsVictory;
    }
    this.setState((state) => {
      return { userScore: state.userScore + 1, outcome: message };
    });
  };

  incrementCpuScore = (option) => {
    const rockDefeat = "You lose! Rock is wrapped by paper!";
    const paperDefeat = "You lose! Paper is cut by scissors!";
    const scissorsDefeat = "You lose! Scissors is crushed by rock!";
    let message = "";
    if (option === "rock") {
      message = rockDefeat;
    }
    if (option === "paper") {
      message = paperDefeat;
    }
    if (option === "scissors") {
      message = scissorsDefeat;
    }

    this.setState((state) => {
      return { cpuScore: state.cpuScore + 1, outcome: message };
    });
  };

  incrementDraw = () => {
    this.setState((state) => {
      return { draw: state.draw + 1, outcome: "It's a draw." };
    });
  };

  reset = () => {
    this.setState({
      userScore: 0,
      cpuScore: 0,
      draw: 0,
      outcome: "Click on an image to begin the game.",
    });
  };

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default App;
