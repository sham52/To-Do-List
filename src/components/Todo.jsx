import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
const Todo = ({ setTodos, todos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editTodo = id => {
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <li
          className={` bg-blue-500 rounded px-4 py-1 my-2 text-white  transition-all ${
            todo.completed && "line-through opacity-80 transition-all"
          }`}
          key={todo.id}
        >
          {todo.text}
        </li>
        <div className="flex gap-2">
          <button onClick={deleteHandler}>
            <FaTrashAlt
              className="cursor-pointer text-red-500 hover:text-red-800"
              size={25}
            />
          </button>
          <button onClick={completedHandler}>
            <BsFillCheckSquareFill
              className="cursor-pointer text-green-500 hover:text-green-800"
              size={25}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
