import React from "react";
import {ChoicesImages} from "./ChoicesImages";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const choices = [
  { name: "rock", image: rock },
  { name: "paper", image: paper },
  { name: "scissors", image: scissors },
];

export const Actions = (props) => {
  return choices.map((elem) => {
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
  });
};