// Autor: Dalia
// Componentă pentru istoricul căutărilor recente.
// Dalia a implementat afișarea ultimelor 3 filme căutate ca butoane clicabile,
// permițând utilizatorului să repete rapid o căutare anterioară.

function SearchHistory({ history, onSelect }) {
  if (!history.length) return null;

  return (
    <div className="search-history">
      <h3>Căutări recente:</h3>
      <ul>
        {history.map((title, i) => (
          <li key={i} onClick={() => onSelect(title)}>
            🎬 {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;