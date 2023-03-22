import React from "react";
const Form = ({ setInput, input, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submitHandler}
        action=""
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4 ">
          <div className="flex w-full justify-between">
            <label
              htmlFor="todo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Add Todo
            </label>
            {/* Selection  */}
            <div className="select">
              <label
                htmlFor="todos"
                className="block  text-sm font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                onChange={statusHandler}
                id="todos"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mb-4"
              >
                <option value="all" defaultValue>
                  All
                </option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              value={input}
              onChange={inputHandler}
              type="text"
              id="todo"
              className="shadow appearance-none border rounded-tl-lg rounded-bl-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Todo..."
              required
            />
            <button
              className="w-[35%] bg-blue-500 hover:bg-blue-700 text-sm  text-white font-bold py-2 px-4 rounded-tr-lg rounded-br-lg focus:shadow-outline focus:outline-none "
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
