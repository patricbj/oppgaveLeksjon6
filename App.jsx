import React, { useState } from 'react';

import TodoCardList from './src/components/TodoCardList';
import Navbar from './src/components/Navbar.jsx';
import Modal from './src/components/Modal.jsx';
import CompletedList from './src/components/CompletedList';
import TodoButton from './src/components/TodoButton';
import Title from './src/components/Title';

export default function App() {
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [count, setCount] = useState(0);

  const addTodo = (values) => {
    setCount(count + 1);
    setTodos((prev) => [{ id: count, ...values }, ...prev]);
  };

  return (
    <>
      <Navbar />
      <main>
        <div id="container">
          <TodoButton modal={modal} setModal={setModal} />
          <Title />
          {todos && todos.length < 1 ? (
            <h3>Yay! No todos today! :)</h3>
          ) : (
            <TodoCardList
              todos={todos}
              setTodos={setTodos}
              setCompletedTodos={setCompletedTodos}
            />
          )}
          <section id="todoListCompleted">
            <h3 id="headerTodoListCompleted">Completed todos</h3>
            <CompletedList completedTodos={completedTodos} />
          </section>
          {modal && (
            <Modal
              modal={modal}
              setModal={setModal}
              formData={formData}
              setFormData={setFormData}
              addTodo={addTodo}
            />
          )}
        </div>
      </main>
      <footer />
    </>
  );
}
