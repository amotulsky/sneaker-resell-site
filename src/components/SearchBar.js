import React from 'react';

function SearchBar({ onSearch, setSearchTerm, searchTerm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search sneakers"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
