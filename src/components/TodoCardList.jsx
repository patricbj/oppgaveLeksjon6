import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ setCompletedTodos, todos, setTodos }) => {
  function date() {
    const currentdate = new Date();
    const datetime = `${currentdate.getDate()}.${
      currentdate.getMonth() + 1
    }.${currentdate.getFullYear()} - ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    return datetime;
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const completedTodo = todos.filter((todo) => todo.id === id)[0];
    setCompletedTodos((prev) => [{ ...completedTodo, date: date() }, ...prev]);
    deleteTodo(id);
  };

  return (
    <section id="todoItemBox">
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </section>
  );
};
export default TodoCardList;
