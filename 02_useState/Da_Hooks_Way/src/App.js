// adds local state to a function.
import React, { useState } from 'react';
import "./App.css";

// class back to function
const App = () => {
  // an array returning a pair: state, and a function to set state
  let [count, setCount] = useState(0); // param to add initial state
  const increment = () => {
    // note: not an object
    setCount(++count)
  }
  // no render method
  return (<div>
    <p>The count is {count}</p>
    <button onClick={increment}>increment</button>
  </div>);
}

export default App;
