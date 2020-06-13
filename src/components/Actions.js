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
        <ChoicesImages
          incrementDraw={this.props.incrementDraw}
          incrementCpu={this.props.incrementCpu}
          incrementUser={this.props.incrementUser}
          outcome={this.props.outcome}
          image={rock}
          name="rock"
        />
        <ChoicesImages
          incrementDraw={this.props.incrementDraw}
          incrementCpu={this.props.incrementCpu}
          incrementUser={this.props.incrementUser}
          outcome={this.props.outcome}
          image={paper}
          name="paper"
        />
        <ChoicesImages
          incrementDraw={this.props.incrementDraw}
          incrementCpu={this.props.incrementCpu}
          incrementUser={this.props.incrementUser}
          outcome={this.props.outcome}
          image={scissors}
          name="scissors"
        />
      </>
    );
  }
}

export default Actions;
