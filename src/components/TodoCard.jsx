import React from 'react';

const TodoCard = ({ deleteTodo, completeTodo, todo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleComplete = () => {
    completeTodo(todo.id);
  };

  return (
    <section className="todoItem">
      <h3 className="todoTitle">{todo.title}</h3>
      <p className="todoText">{todo.description}</p>
      <p className="todoAuthor">{todo.author}</p>
      <div className="todoItemBoxButtons">
        <button type="button" className="todoDelete" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" className="todoComplete" onClick={handleComplete}>
          Complete
        </button>
      </div>
    </section>
  );
};

export default TodoCard;
