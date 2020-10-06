import React from 'react';

const TodoButton = ({ modal, setModal }) => (
  <button
    id="addTodoButton"
    onClick={() => {
      setModal(!modal);
    }}
    type="button"
  >
    <div id="addTodoPlusSign">+</div>
    <div id="addTodoText">Todo</div>
  </button>
);

export default TodoButton;
