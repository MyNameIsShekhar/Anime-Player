import React from 'react';

function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}

export default SearchBar;
