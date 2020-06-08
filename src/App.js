import React from "react";
import "./App.css";
import { useCounter } from "./Counter";

const App = () => {
  const {
    count,
    increaseHandler,
    decreaseHandler,
    resetHandler,
  } = useCounter();

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseHandler}>INCREMENT</button>
      <button onClick={decreaseHandler}>DECREMENT</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default App;
