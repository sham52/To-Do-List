import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div
      name="todo-container"
      className="bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4 w-full"
    >
      <ul name="todo-list" className="list-none text-center">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
