import React from 'react';
import TitleBar from "./components/TitleBar";
import ScoreBoard from "./components/ScoreBoard";
import Actions from "./components/Actions";
import Message from "./components/DuelMessage";
import ResetButton from "./components/ResetButton";
import './App.css';


function App() {
  return (
    <div className="App">
      <TitleBar />
     <ScoreBoard />
     <Actions />
    <Message />
    <ResetButton />
        
    </div>
  );
}

export default App;
