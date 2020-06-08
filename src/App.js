import React, { useState } from "react";
import "./App.css";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };
  const decreaseHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return { count, increaseHandler, decreaseHandler, resetHandler };
};

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
