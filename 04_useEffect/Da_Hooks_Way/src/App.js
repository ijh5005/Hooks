import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  let [text, setText] = useState("yeah boi! flavor flav");
  let [backgroundColor, setBackgroundColor] = useState("#A30000");
  let [count, setCount] = useState(0);


  useEffect(() => {
    document.getElementById('text').innerText = text;
    document.body.style.backgroundColor = backgroundColor;
  })

  const getHype = () => {
    const colors = ["#A30000", "#00006D", "#007F00", "#000000"];
    const randomIndex = Math.floor(Math.random() * (colors.length));
    const newText = text + "!";
    setText(newText);
    setBackgroundColor(colors[randomIndex]);
    setCount(++count)
  }

  const clock = () => {
    if(count > 8){
      return (<img src={"https://slimages.macysassets.com/is/image/MCY/products/8/optimized/136018_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$"} alt="flava"/>)
    }
    return null
  }

  return (<div onClick={getHype}>
    <p id="text">yeah boi! flavor flav</p>
    <div id="clock">
      {clock()}
    </div>
  </div>);
}

export default App;
