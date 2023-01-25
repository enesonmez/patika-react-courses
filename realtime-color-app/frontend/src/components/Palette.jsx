import { useState } from "react";

import { send } from "../socketApi";

function Palette({activeColor}) {
  const [color, setColor] = useState("#282c34");

  const handleClick = () => {
    send(color);
  };

  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      {
        activeColor
      }
    </div>
  );
}

export default Palette;
