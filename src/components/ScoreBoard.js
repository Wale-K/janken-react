import React from "react";
class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props)
    return (
      <>
        <p>User</p>
        <p>{this.props.userScore}</p>

        <p>CPU</p>
        <p>{this.props.cpuScore}</p>

        <p>Draw</p>
        <p>{this.props.draw}</p>
      </>
    );
  }
}

export default ScoreBoard;
