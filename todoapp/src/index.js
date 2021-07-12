import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import VisibilityFilters, {
  filters,
  DEFAULT_ACTIVE_FILTER_INDEX
} from "./VisibilityFilters";

import "./styles.css";

let countTodos = 0;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      activeFilter: filters[DEFAULT_ACTIVE_FILTER_INDEX]
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.switchFilter = this.switchFilter.bind(this);
  }
  addTodo(content) {
    this.setState({
      //       todos: this.state.todos.concat({
      //         content,
      //         completed: false,
      //         id: ++countTodos
      //       })
      todos: [
        ...this.state.todos,
        { content, completed: false, id: ++countTodos }
      ]
    });
  }
  toggleTodo(id) {
    this.state.todos &&
      this.state.todos.length &&
      this.setState(prevState => {
        const { todos: oldTodos } = this.state;
        const foundIndex = oldTodos.findIndex(todo => todo.id === id);
        const foundTodo = oldTodos[foundIndex];
        return {
          ...prevState,
          todos: oldTodos
            .slice(0, foundIndex)
            .concat({ ...foundTodo, completed: !foundTodo.completed })
            .concat(oldTodos.slice(foundIndex + 1))
        };
      });
  }
  switchFilter(activeFilter) {
    this.setState({ activeFilter });
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={
            this.state.todos && this.state.todos.length
              ? this.state.todos.filter(this.state.activeFilter.condition)
              : []
          }
          toggleTodo={this.toggleTodo}
        />
        <VisibilityFilters
          filters={filters}
          switchFilter={this.switchFilter}
          activeFilter={this.state.activeFilter.label}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
