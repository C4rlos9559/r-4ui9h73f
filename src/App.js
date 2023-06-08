import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }

  getVal = (event) => {
    this.setState({ val: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input
          type="text"
          placeholder="Empieza a escribir algo"
          onChange={this.getVal}
        />
        <p className="repeater">{this.state.val}</p>
      </div>
    );
  }
}

export default App;
