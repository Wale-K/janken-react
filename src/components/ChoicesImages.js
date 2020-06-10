import React from "react";

class ChoicesImages extends React.Component {
  constructor(props) {
    super(props);
this.handleChoice = this.handleChoice.bind(this)
  }
handleChoice = () => {
      console.log("hello")
  }
  render() {
    return (
      <button onClick={this.handleChoice}>
        <img src={this.props.image} alt={this.props.name} />
      </button>
    );
  }
}

export default ChoicesImages;
