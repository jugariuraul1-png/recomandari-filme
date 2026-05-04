// Autor: Raul
// Componentă pentru bara de căutare a filmelor.
// Raul a construit acest input controlat cu suport pentru tasta Enter,
// astfel încât utilizatorul să poată căuta rapid fără a folosi mouse-ul.

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