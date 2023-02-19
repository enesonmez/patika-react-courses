import { useState } from "react";

const defaultItems = [
  {
    name: "react",
  },
  {
    name: "angular",
  },
  {
    name: "vue",
  },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prevState) => [...prevState, { name: text }]);
    setText("");
  };

  return (
    <div>
      <label>
        Text
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && addItem()}
        />
      </label>
      <button onClick={addItem}>Add</button>

      <br />
      <div data-testid="list">
        {items.map((item, key) => (
          <p key={key}>
            {key + 1} - {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Todo;
