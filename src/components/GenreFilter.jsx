function GenreFilter({ selected, onSelect }) {
  const GENRES = ['Toate', 'Action', 'Comedy', 'Drama', 'Sci-Fi'];
  return (
    <div className="genre-filter">
      {GENRES.map((genre) => (
        <button
          key={genre}
          className={selected === genre ? 'active' : ''}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
export default GenreFilter;