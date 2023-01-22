import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  // const data = useMemo(() => {
  //   return calculatingAnything();
  // }, []);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}
    </div>
  );
}

// function calculatingAnything() {
//   console.log('calculating...')
//   for (let index = 0; index < 1000000000; index++) {}
//   console.log('calculating completed!')

//   return { name: "enes" };
// }

export default App;
