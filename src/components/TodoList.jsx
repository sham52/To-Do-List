import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const completedCounter = todos.filter((el) => el.completed === true).length;

  return (
    <div
      name="todo-container"
      className="flex justify-center items-center min-h-[177px] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4 w-full "
    >
      {todos.length ? (
        <div>
          <ul name="todo-list" className="list-none text-center">
            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
              />
            ))}
          </ul>
          <section className="min-w-[300px] bg-slate-600 rounded-lg text-center text-white font-bold">
            <p>
              {completedCounter} of {todos.length} is completed
            </p>
          </section>
        </div>
      ) : (
        <div className="bg-slate-600 px-4 py-2 h-10 text-white rounded-lg text-center text-xl">
          <h3 className="">There is no todo</h3>
        </div>
      )}
    </div>
  );
};

export default TodoList;
