import { useState } from "react";

export const useCounter = () => {
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
