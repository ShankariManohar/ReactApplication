import React from "react";
import Todo from "./Todo";

const TodoList = props => (
  <ul className="todo-list">
    {props.todos && props.todos.length
      ? props.todos.map(todo => (
          <Todo
            key={`todo-${todo.id}`}
            todo={todo}
            toggleTodo={props.toggleTodo.bind(null, todo.id)}
          />
        ))
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
