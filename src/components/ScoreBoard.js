import React from "react";
import styled from "styled-components";

const ScoreBoardBorder = styled.div`
  border: solid #012a36;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
  padding: 10px;
`;

const Fifty = styled.div`
font-size 50px;
weight: bold;
`;

const Badge = styled.div`
  font-size: 10px;
  background-color: #012a36;
  margin-top: 10px;
  text-align: center;
`;

const ScoreBoard = (props) => {
  return (
    <ScoreBoardBorder>
      <div>
        <Badge>User</Badge>
        <Fifty>{props.userScore}</Fifty>
      </div>
      <div>
        <Badge>CPU</Badge>
        <Fifty>{props.cpuScore}</Fifty>
      </div>
      <div>
        <Badge>Draw</Badge>
        <Fifty>{props.draw}</Fifty>
      </div>
    </ScoreBoardBorder>
  );
};

export default ScoreBoard;
