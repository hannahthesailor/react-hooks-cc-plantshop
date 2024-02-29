import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="searchbar">
      <label>Search by Plant Name:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      
    </div>
  );
}

export default Search;
