import React from "react";
import styled from "styled-components";

const ChoicesImagesButton = styled.button`
  border: solid #29274c;
  border-radius: 100px;
  background-color: transparent;
  outline: none;
  margin: 0 auto;
`;

const ChoicesImagesImg = styled.img`
  height: 100px;
  width: 100px;
  padding: 0px;
  :hover {
    cursor: pointer;
  }
`;

const choices = ["rock", "paper", "scissors"];

export const ChoicesImages = (props) => {
  const handleChoice = () => {
    const { name } = props;

    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    if (name === cpuChoice) {
      return props.incrementDraw();
    } else if (
      (name === "rock" && cpuChoice === "scissors") ||
      (name === "paper" && cpuChoice === "rock") ||
      (name === "scissors" && cpuChoice === "paper")
    ) {
      return props.incrementUser(name);
    } else return props.incrementCpu(name);
  };

  return (
    <ChoicesImagesButton onClick={handleChoice}>
      <ChoicesImagesImg src={props.image} alt={props.name} />
    </ChoicesImagesButton>
  );
};
