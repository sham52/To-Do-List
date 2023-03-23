import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //States
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);
  useEffect(() => {
    const getLocalTodos = () => {
      let localTodos = localStorage.getItem("todos");

      if (localTodos) {
        return JSON.parse(localStorage.getItem("todos"));
      } else {
        return [];
      }
    };
    getLocalTodos();
  }, []);

  //Logs
  console.log("Todos: " + JSON.stringify(todos));
  console.log("Input: " + input);
  console.log(status);
  console.log(filteredTodos);

  return (
    <div className="App bg-slate-700 h-screen flex flex-col justify-center items-center">
      <header className="text-white text-4xl mb-4 font-bold ">To-Do App</header>
      <section className="w-[33%] max-w-3xl min-w-[450px]">
        <Form
          input={input}
          setTodos={setTodos}
          setInput={setInput}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </section>
    </div>
  );
}

export default App;
