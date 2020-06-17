import React from "react";
import styled from "styled-components";

const StyledDiv = styled.h1`
  background-color: #29274C;
  text-align: center;
  padding: 20px;

  // color: white;
  // background: #4F86C6;
  // text-align: center;
  // padding: 20px;

`;

const TitleBar = (props) => {
  return (
    <>
      <StyledDiv>Rock Paper Scissors!</StyledDiv>
      
    </>
  );
};

export default TitleBar;
