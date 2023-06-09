import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import UpdateForm from "./UpdateForm";
const Todo = ({ setTodos, todos, todo }) => {
  const [edit, setEdit] = useState("");

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

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
    setEdit(todo.text);
  };

  return (
    <>
      {!todo.isEditing ? (
        <div className="flex flex-row justify-between min-w-[386px] bg-slate-600 px-4 py-2 my-4 rounded-lg">
          <li
            className={` bg-blue-500 rounded px-4 py-1 my-2 text-white  transition-all ${
              todo.completed && "line-through opacity-80 transition-all"
            }`}
            key={todo.id}
          >
            {todo.text}
          </li>
          <div className="flex gap-3">
            <button onClick={() => editTodo(todo.id)}>
              <FiEdit
                className="cursor-pointer text-white hover:opacity-60 transition-all duration-200 ease-in"
                size={25}
              />
            </button>
            <button onClick={deleteHandler}>
              <FaTrashAlt
                className="cursor-pointer text-red-400 hover:text-red-500 transition-all duration-200 ease-in"
                size={25}
              />
            </button>
            <button onClick={completedHandler}>
              <BsFillCheckSquareFill
                className="cursor-pointer text-green-400 hover:text-green-500 tranisiton-all duration-200 ease-in"
                size={25}
              />
            </button>
          </div>
        </div>
      ) : (
        <UpdateForm
          setEdit={setEdit}
          edit={edit}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      )}
    </>
  );
};
export default Todo;
