import React from "react";
import ChoicesImages from "./ChoicesImages";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

class Actions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ChoicesImages image={rock} name="rock" />
        <ChoicesImages image={paper} name="paper" />
        <ChoicesImages image={scissors} name="scissors" />
        
      </>
    );
  }
}

export default Actions;
