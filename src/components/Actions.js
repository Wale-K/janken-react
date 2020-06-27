import React from "react";
import { ChoicesImages } from "./ChoicesImages";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import styled from "styled-components"

const choices = [
  { name: "rock", image: rock },
  { name: "paper", image: paper },
  { name: "scissors", image: scissors },
];

const ActionsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
`;

export const Actions = (props) => {
  return (
    <ActionsStyle>
      {choices.map((elem) => {
        return (
          <ChoicesImages
            incrementDraw={props.incrementDraw}
            incrementCpu={props.incrementCpu}
            incrementUser={props.incrementUser}
            outcome={props.outcome}
            image={elem.image}
            name={elem.name}
            key={elem.name}
          />
        );
      })}
    </ActionsStyle>
  );
};
