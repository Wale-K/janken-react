import React from "react";
import ChoicesImages from "./ChoicesImages";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const choices = [
  { name: "rock", image: rock },
  { name: "paper", image: paper },
  { name: "scissors", image: scissors },
];



// export const Actions = (props) => {
//   return (
//     <ChoicesImages
//       incrementDraw={props.incrementDraw}
//       incrementCpu={props.incrementCpu}
//       incrementUser={props.incrementUser}
//       outcome={props.outcome}
//       image={elem.image}
//       name={elem.name}
//       key={elem.name}
//     />
//   );
// };



class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderChoices = () => {
    return choices.map((elem) => {
      return (
        <ChoicesImages
          incrementDraw={this.props.incrementDraw}
          incrementCpu={this.props.incrementCpu}
          incrementUser={this.props.incrementUser}
          outcome={this.props.outcome}
          image={elem.image}
          name={elem.name}
          key={elem.name}
        />
      );
    });
  };

  render() {
    return this.renderChoices();
  }
}

export default Actions;
