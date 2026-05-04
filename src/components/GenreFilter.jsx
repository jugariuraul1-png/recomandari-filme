// Autor: Dalia
// Componentă pentru filtrarea filmelor după gen.
// Dalia a creat butoanele de filtrare și a gestionat logica de selecție activă,
// astfel încât utilizatorul să poată restrânge rezultatele la genul dorit.

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