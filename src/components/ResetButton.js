import React from "react";
import styled from "styled-components";

const ResetButtonStyle = styled.button`
border: solid #29274C;
border-radius: 5px;
font-size: 24px;
background-color: #D295BF;
float: right;
margin-right: 20px
`

const ResetButton = (props) => {
  return <ResetButtonStyle onClick={props.reset}>Reset</ResetButtonStyle>;
}

export default ResetButton;
