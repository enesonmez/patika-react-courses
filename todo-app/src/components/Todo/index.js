import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

const statusValues = { all: "all", completed: "completed", active: "active" };

function Todo() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState(statusValues.all);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    saveLocalStorage();
    filterHandler();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    switch (filterStatus) {
      case statusValues.active:
        setFilteredTodos(todos.filter((todo) => !todo.check));
        break;
      case statusValues.completed:
        setFilteredTodos(todos.filter((todo) => todo.check));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalStorage = () => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <section className="todoapp">
      <Header addTodo={setTodos} />
      <List setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      <Footer
        todos={todos}
        setTodos={setTodos}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        statusValues={statusValues}
      />
    </section>
  );
}

export default Todo;
