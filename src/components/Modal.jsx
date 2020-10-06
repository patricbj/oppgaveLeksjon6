import React, { useState } from 'react';

const Modal = ({ modal, setModal, addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [descCounter, setDescCounter] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ title, description, author });
    setModal(!modal);
  };

  const updateDescCounter = () => {
    setDescCounter(50 - (description.length + 1));
  };

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateDescription = (event) => {
    setDescription(event.target.value);
    updateDescCounter();
  };

  const updateAuthor = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-body">
        <div id="modal-header">
          <h4>New todo</h4>
          <button
            onClick={() => {
              setModal(!modal);
            }}
            className="close"
            type="button"
            value="X"
            label="closeModal"
          >
            X
          </button>
        </div>
        <form id="modal-main" onSubmit={handleSubmit}>
          <h5>Title</h5>
          <input
            name="title"
            onChange={updateTitle}
            id="modal-inputTitle"
            className="modal-input"
            type="text"
            value={title}
            // eslint-disable-next-line react/no-unknown-property
            maxLength={30}
          />
          <div id="inputDescriptionTitleBox">
            <h5 id="inputDescriptionTitle">Description</h5>
            <p id="remainingCharacters">
              ({description ? descCounter : 50} characters left)
            </p>
          </div>
          <input
            name="description"
            onChange={updateDescription}
            type="text"
            id="modal-inputDescription"
            className="modal-input"
            value={description}
            // eslint-disable-next-line react/no-unknown-property
            maxLength={50}
          />
          <h5>Author</h5>
          <input
            name="author"
            onChange={updateAuthor}
            id="modal-inputAuthor"
            className="modal-input"
            type="text"
            value={author}
            // eslint-disable-next-line react/no-unknown-property
            maxLength={30}
          />
          <button type="submit" id="modal-create">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
