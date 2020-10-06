import React from 'react';

const Search = ({ setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div id="todoListSearch">
      <label htmlFor="searchInput">Search on Title:</label>
      <input
        id="searchInput"
        type="text"
        maxlenght="30"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
