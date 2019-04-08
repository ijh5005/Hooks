import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {
    text: "yeah boi! flavor flav",
    backgroundColor: "#A30000",
    count: 0
  }

  componentDidMount() {
    document.getElementById('text').innerText = this.state.text;
  }

  componentDidUpdate() {
    document.getElementById('text').innerText = this.state.text;
  }

  getHype = () => {
    const colors = ["#A30000", "#00006D", "#007F00", "#000000"];
    const randomIndex = Math.floor(Math.random() * (colors.length));
    const newText = this.state.text + "!";
    this.setState({
      backgroundColor: colors[randomIndex],
      text: newText,
      count: ++this.state.count
    })
  }

  clock = () => {
    if(this.state.count > 8){
      return (<img src={"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/136018_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$"} alt="flava"/>)
    }
    return null
  }

  render() {
    document.body.style.backgroundColor = this.state.backgroundColor;
    return (<div onClick={this.getHype}>
      <p id="text">yeah boi! flavor flav</p>
      <div id="clock">
        {this.clock()}
      </div>
    </div>);
  }
}

export default App;
