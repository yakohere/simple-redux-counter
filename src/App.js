import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseHandler}>INCREMENT</button>
      <button onClick={increaseHandler}>DECREMENT</button>
    </div>
  );
};

export default App;
