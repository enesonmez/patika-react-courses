import React from "react";

function List({ setTodos, todos, filteredTodos }) {
  const isCompleted = (todo) => {
    const newTodos = todos.map((t) => {
      return todo.id === t.id ? { ...t, check: !t.check } : t;
    });
    setTodos(newTodos);
  };

  const toggleAllTodo = () => {
    const status = todos.some((todo) => !todo.check);
    const newTodos = todos.map((todo) => {
      todo.check = status;
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAllTodo}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo, i) => (
          <li className={todo.check ? "completed" : ""} key={i}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.check}
                onChange={() => isCompleted(todo)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => removeTodo(todo)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
