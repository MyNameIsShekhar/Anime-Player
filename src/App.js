import React from 'react';
import './style.css'; // Import Tailwind CSS styles
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <SearchBar />
    </div>
  );
}

export default App;
