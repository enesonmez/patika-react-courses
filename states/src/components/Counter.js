import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("enes")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
