import React from "react";

function SearchBar({ query, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search..."
      />
      <input type="submit" value="Search" />
    </div>
  );
}

export default SearchBar;
