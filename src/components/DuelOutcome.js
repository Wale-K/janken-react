import React from "react";
import styled from "styled-components"

const DuelOutcomeStyle = styled.p`
text-align: center;
font-size: 20px;
`

const DuelOutcome = (props) => {
return <DuelOutcomeStyle>{props.outcome}</DuelOutcomeStyle>
}

export default DuelOutcome;
