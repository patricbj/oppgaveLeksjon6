window.onload = function () {
  const modal = document.getElementById('myModal');

  const btn = document.getElementById('addTodoButton');

  const span = document.getElementsByClassName('close')[0];

  btn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  span.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  const todos = Array;
  const completedTodos = Array;

  const inputField = document.getElementById('modal-inputDescription');
  const charCounter = document.getElementById('remainingCharacters');
  inputField.addEventListener('input', getInputValue);
  inputField.addEventListener('change', getInputValue);

  function getInputValue() {
    const string = new String(inputField.value);
    const inputLength = string.length;
    const counter = 125 - inputLength;
    charCounter.innerHTML;
    charCounter.innerHTML = `(${counter} characters left)`;
  }
  /*
    const form = document.getElementById("modal-main");
    form.addEventListener("", function() {
        addTodoItem();
    });
    */
  const createTodoButton = document.getElementById('modal-create');
  createTodoButton.addEventListener('click', function () {
    /*
        form.submit(function(form){
            form.preventDefault();
        });
        */
    addTodoItem();
  });
  const deleteBtns = document.getElementsByClassName('todoDelete');
  const completeBtns = document.getElementsByClassName('todoComplete');

  for (const button of deleteBtns) {
    var section = button.parentNode.parentNode;
    button.addEventListener('click', function () {
      deleteTodoItem(section);
    });
  }

  for (const button of completeBtns) {
    var section = button.parentNode.parentNode;
    button.addEventListener('click', function () {
      completeTodoItem(section);
    });
  }

  function addTodoItem() {
    /*
        var form = document.forms["modal-form"];
        var title = form["modal-inputTitle"].value;
        var description = form["modal-inputDescription"].value;
        var author = form["modal-inputAuthor"].value;
        */

    const inputTitle = document.getElementById('modal-inputTitle').value;
    const inputDescription = document.getElementById('modal-inputDescription')
      .value;
    const inputAuthor = document.getElementById('modal-inputAuthor').value;
    const dateTime = getCurrentDate();
    const date = dateTime.Date;
    const time = dateTime.Time;

    const todoItem = {
      Title: inputTitle,
      Description: inputDescription,
      Author: inputAuthor,
      Date: date,
      Time: time,
    };

    document.getElementById('modal-inputTitle').value = '';
    document.getElementById('modal-inputDescription').value = '';
    document.getElementById('modal-inputAuthor').value = '';

    const section = document.createElement('section');
    const title = document.createElement('h3');
    const desc = document.createElement('p');
    const author = document.createElement('p');
    const div = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    const grid = document.getElementById('todoItemBox');

    section.className = 'todoItem';
    title.className = 'todoTitle';
    desc.className = 'todoText';
    author.className = 'todoAuthor';
    div.className = 'todoItemBoxButtons';
    deleteBtn.className = 'todoDelete';
    completeBtn.className = 'todoComplete';

    title.innerHTML = todoItem.Title;
    desc.innerHTML = todoItem.Description;
    author.innerHTML = todoItem.Author;
    deleteBtn.innerHTML = 'Delete';
    completeBtn.innerHTML = 'Complete';

    deleteBtn.addEventListener('click', function () {
      deleteTodoItem(section);
    });
    completeBtn.addEventListener('click', function () {
      completeTodoItem(section);
    });

    grid.insertAdjacentElement('afterbegin', section);
    section.appendChild(title);
    section.appendChild(desc);
    section.appendChild(author);
    section.appendChild(div);
    div.appendChild(deleteBtn);
    div.appendChild(completeBtn);
  }

  function deleteTodoItem(e) {
    document.getElementById('todoItemBox').removeChild(e);
  }

  function completeTodoItem(section) {
    const tr = document.createElement('tr');
    tr.className = 'tableDataRow';

    const titleTd = document.createElement('td');
    const authorTd = document.createElement('td');
    const descTd = document.createElement('td');
    const dateTd = document.createElement('td');

    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(descTd);
    tr.appendChild(dateTd);

    const table = document.getElementById('todoTable');
    table.appendChild(tr);

    title = section.getElementsByClassName('todoTitle')[0].innerHTML;
    author = section.getElementsByClassName('todoAuthor')[0].innerHTML;
    desc = section.getElementsByClassName('todoText')[0].innerHTML;
    dateTime = getCurrentDate();
    date = dateTime.Date;
    time = dateTime.Time;

    titleTd.innerHTML = title;
    authorTd.innerHTML = author;
    descTd.innerHTML = desc;
    dateTd.innerHTML = date;

    tr.id = time;

    deleteTodoItem(section);
  }

  function getCurrentDate() {
    let today = new Date();

    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const time = today.getTime();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    today = {
      Date: `${dd}.${mm}.${yyyy}`,
      Time: time,
    };

    return today;
  }
};
