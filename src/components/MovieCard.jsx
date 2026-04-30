function MovieCard({ movie }) {
  const imdb = movie.Ratings?.find(r => r.Source === 'Internet Movie Database');
  const rt = movie.Ratings?.find(r => r.Source === 'Rotten Tomatoes');
  const meta = movie.Ratings?.find(r => r.Source === 'Metacritic');

  const rtValue = rt ? parseInt(rt.Value) : null;
  let recommendation = null;
  if (rtValue !== null) {
    if (rtValue > 80) recommendation = { text: '✅ Ar trebui să vizionezi acest film chiar acum!', cls: 'good' };
    else if (rtValue < 50) recommendation = { text: '❌ Evită filmul cu orice preț!', cls: 'bad' };
    else recommendation = { text: '🤔 Film decent, depinde de preferințe.', cls: 'neutral' };
  }

  return (
    <div className="movie-card">
      <div className="movie-top">
        {movie.Poster && movie.Poster !== 'N/A' && (
          <img src={movie.Poster} alt={movie.Title} className="poster" />
        )}
        <div className="movie-info">
          <h2>{movie.Title}</h2>
          <p><strong>An:</strong> {movie.Year}</p>
          <p><strong>Evaluare:</strong> {movie.Rated}</p>
          <p><strong>Durată:</strong> {movie.Runtime}</p>
          <p><strong>Gen:</strong> {movie.Genre}</p>
          <p><strong>Descriere:</strong> {movie.Plot}</p>

          <div className="ratings">
            {imdb && <span className="badge imdb">IMDb: {imdb.Value}</span>}
            {rt && <span className="badge rt">RT: {rt.Value}</span>}
            {meta && <span className="badge meta">Metacritic: {meta.Value}</span>}
          </div>

          {recommendation && (
            <div className={`recommendation ${recommendation.cls}`}>
              {recommendation.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;