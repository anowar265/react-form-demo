import { useState } from "react";

export const Counter = () => {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};
