import React from "react";

class DuelOutcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.outcome}</p>;
  }
}

export default DuelOutcome;
