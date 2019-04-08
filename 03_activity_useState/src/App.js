import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {
    multiple: null
  }
  multiply = (a, b) => {
    this.setState({
      multiple: a * b
    })
  }
  chooseNumbers = () => {
    const a = prompt("first number please");
    const b = prompt("second number please");
    this.multiply(a, b);
  }
  render() {
    return (<div>
      <p>The multiple is {this.state.multiple}</p>
      <button onClick={this.chooseNumbers}>multiply</button>
    </div>);
  }
}

export default App;
