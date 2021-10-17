import React, { Component } from "react";
import Example from "../example/Example";
import States from "../states/States";
import "./style.css";
class ChosenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "Example",
    };
  }
  changeComp = () => {
    if (this.state.currentComponent === "Example") {
      this.setState({ currentComponent: "State" });
    } else {
      this.setState({ currentComponent: "Example" });
    }
  };
  render() {
    return (
      <div className="toggleComponent">
        <button className="CompChangeBtn" onClick={this.changeComp}>
          {this.state.currentComponent}
        </button>
        {this.state.currentComponent === "Example" ? <Example /> : <States />}
      </div>
    );
  }
}
export default ChosenComponent;
