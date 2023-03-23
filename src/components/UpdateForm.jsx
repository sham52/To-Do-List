import React from "react";
import { BsBackspaceFill } from "react-icons/bs";
const UpdateForm = ({ todo, todos, setTodos, edit, setEdit }) => {
  const backEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };
  const handleChange = (e) => {
    setEdit(e.target.value);
  };
  const handleUpdate = (e, id) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: edit, isEditing: false } : todo
      )
    );
  };
  return (
    <section className=" flex flex-row min-w-[386px] gap-2 bg-slate-600 px-4 py-2 my-4 rounded-lg justify-between items-center">
      <div className="flex flex-row w-[100%]">
        <input
          required
          value={edit}
          onChange={handleChange}
          type="text"
          className="shadow appearance-none border rounded-tl-lg rounded-bl-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={(e) => handleUpdate(e, todo.id)}
          className="w-[35%] bg-blue-500 hover:bg-blue-700 text-sm  text-white font-bold py-2 px-4 rounded-tr-lg rounded-br-lg focus:shadow-outline focus:outline-none transition-all duration-200 ease-in"
        >
          Update
        </button>
      </div>
      <button
        onClick={() => backEditTodo(todo.id)}
        className="text-white cursor-pointer "
      >
        <BsBackspaceFill size={25} />
      </button>
    </section>
  );
};

export default UpdateForm;
