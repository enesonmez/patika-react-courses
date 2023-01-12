import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isVisisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisisible)}>Toggle</button>
    </div>
  );
}

export default App;
