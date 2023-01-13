import { useState } from "react";

const initalFormValues = { id: 0, text: "", check: false };

function Header({ addTodo }) {
  const [form, setForm] = useState(initalFormValues);

  const inputOnChanged = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (form.text === "") {
        return false;
      }
      addTodo((prevState) => {
        return [
          ...prevState,
          {
            ...form,
            id: prevState.length === 0 ? 0 : prevState.slice(-1)[0].id + 1,
          },
        ];
      });
      setForm(initalFormValues);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form.text}
          onChange={inputOnChanged}
          onKeyDown={onSubmit}
        />
      </form>
    </header>
  );
}

export default Header;
