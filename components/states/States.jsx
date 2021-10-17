import React from "react";
import "./States.css";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "",
    };
  }
  findString = (e) => {
    this.setState({ string: e.target.value });
  };
  render() {
    const filteredStates = window.cs142models
      .statesModel()
      .filter((el) =>
        el.toLowerCase().includes(this.state.string.toLowerCase())
      );
    return (
      <div>
        <div className="state-cont">
          <input
            type="text"
            className="inputBox"
            placeholder="Хайх"
            onChange={this.findString}
          />
          <div className="states">
            {filteredStates.length === 0 ? (
              <div className="state center">Үр дүн байхгүй байна!!!</div>
            ) : (
              filteredStates.map((el) => (
                <div key={el} className="state">
                  {el}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default States;
