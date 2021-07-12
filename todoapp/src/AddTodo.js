import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input ref={r => (this.input = r)} />
        <button
          className="add-todo"
          onClick={() => this.props.addTodo(this.input.value)}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
