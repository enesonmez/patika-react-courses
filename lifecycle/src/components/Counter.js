import React from "react";
import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Enes");

  // Herhangi bir state'in durumunu yakalama
  // useEffect(()=>{
  //   console.log('state update')
  // })

  // Component mount olduğu zaman
  useEffect(() => {
    console.log("component mount");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    //unmount
    return () => clearInterval(interval);
  }, []);

  // Spesifik bir state'in durumunu yakalama
  useEffect(() => {
    console.log("number state update");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Selim")}>+</button>
    </div>
  );
}

export default Counter;
