import React from "react";

function Footer({
  todos,
  setTodos,
  filterStatus,
  setFilterStatus,
  statusValues,
}) {
  const setStatus = (e) => {
    e.preventDefault();
    setFilterStatus(e.target.id);
  };

  const removeAllCompleted = () => {
    const newTodos = todos.filter((todo) => {
      return !todo.check;
    });
    setTodos(newTodos);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {todos.filter((todo) => !todo.check).length} </strong>
        items left
      </span>

      <ul className="filters">
        {Object.keys(statusValues).map((key, i) => (
          <li key={i}>
            <a
              href="/"
              id={key}
              className={filterStatus === key ? "selected" : ""}
              onClick={setStatus}
            >
              {key[0].toUpperCase() + key.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {todos.some((todo) => todo.check) && (
        <button className="clear-completed" onClick={removeAllCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
