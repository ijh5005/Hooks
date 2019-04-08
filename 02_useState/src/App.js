import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count: ++this.state.count
    })
  }
  render() {
    return (<div>
      <p>The count is {this.state.count}</p>
      <button onClick={this.increment}>increment</button>
    </div>);
  }
}

export default App;
