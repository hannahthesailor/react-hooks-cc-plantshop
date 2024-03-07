import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const lowercaseSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(lowercaseSearchTerm);
    onSearch(lowercaseSearchTerm);
  };

  return (
    <div className="searchbar">
      <label>
        Search by Plant Name:
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Type a name to search..."
        />
      </label>
    </div>
  );
}

export default Search;