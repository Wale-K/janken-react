import React from 'react';
import TitleBar from "./components/TitleBar";
import ScoreBoard from "./components/ScoreBoard";
import Actions from "./components/Actions";
import Message from "./components/DuelMessage";
import ResetButton from "./components/ResetButton";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userScore : 0,
      cpuScore : 0
    }
  }
  render() {
  return (
    <div className="App">
      <TitleBar />
     <ScoreBoard userScore = {this.state.userScore} cpuScore = {this.state.cpuScore} />
     <Actions />
    <Message />
    <ResetButton />
        
    </div>
  );
}
}

export default App;
