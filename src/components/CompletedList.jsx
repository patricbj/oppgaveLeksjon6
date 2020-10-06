import React, { useState } from 'react';
import Search from './Search';

import CompletedListItem from './CompletedListItem';

const CompletedList = ({ completedTodos }) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search setSearch={setSearch} />
      <table id="todoTable">
        <thead>
          <tr id="tableHeader">
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Completed date</th>
          </tr>
        </thead>
        <tbody>
          {completedTodos && search.length > 0
            ? completedTodos
                .filter((todo) =>
                  todo.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((todo) => <CompletedListItem key={todo.id} todo={todo} />)
            : completedTodos.map((todo) => (
                <CompletedListItem key={todo.id} todo={todo} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default CompletedList;
