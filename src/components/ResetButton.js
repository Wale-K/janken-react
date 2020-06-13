// import React from "react";

// const ResetButton = () => {
//   return <button {this.props.reset}>Reset</button>;
// };

// export default ResetButton;


import React from "react";
class ResetButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props)
    return <button onClick={this.props.reset}>Reset</button>;
  }
}

export default ResetButton;
