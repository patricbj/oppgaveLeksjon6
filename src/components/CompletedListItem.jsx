import React from 'react';

const CompletedListItem = ({ todo }) => (
  <tr className="tableDataRow">
    <td>{todo.title}</td>
    <td>{todo.author}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
  </tr>
);

export default CompletedListItem;
