import { useState } from 'react';
function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Introduceți numele unui film..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>Caută</button>
    </div>
  );
}

export default SearchBar;