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