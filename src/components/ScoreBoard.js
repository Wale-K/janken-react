import React from "react";

const ScoreBoard = (props) => {
    return (
        <>
          <p>User</p>
          <p>{props.userScore}</p>
  
          <p>CPU</p>
          <p>{props.cpuScore}</p>
  
          <p>Draw</p>
          <p>{props.draw}</p>
        </>
      );
}

export default ScoreBoard;
