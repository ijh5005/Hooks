import React, { useState } from 'react';
import "./App.css";

const App  = () => {
  const [multiple, setMultiple] = useState(null)
  const multiply = (a, b) => {
    setMultiple(a * b)
  }
  const chooseNumbers = () => {
    const a = prompt("first number please");
    const b = prompt("second number please");
    multiply(a, b);
  }
  render() {
    return (<div>
      <p>The multiple is {multiple}</p>
      <button onClick={chooseNumbers}>multiply</button>
    </div>);
  }
}

export default App;
