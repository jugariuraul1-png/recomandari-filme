import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import SearchHistory from './components/SearchHistory';
import GenreFilter from './components/GenreFilter';
import { getFromCache, saveToCache } from './utils/cache';

const API_KEY = '1997728f'; // 👈 pune cheia ta OMDb aici

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('filmHistory') || '[]');
  });
  const [selectedGenre, setSelectedGenre] = useState('Toate');

  const fetchMovie = async (title) => {
    setLoading(true);
    setError('');
    setMovie(null);

    const cached = getFromCache(title.toLowerCase());
    if (cached) {
      setMovie(cached);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}&plot=full`
      );
      const data = await res.json();

      if (data.Response === 'False') {
        setError('Filmul nu a fost găsit. Încearcă alt titlu.');
      } else {
        saveToCache(title.toLowerCase(), data);
        setMovie(data);
        updateHistory(title);
      }
    } catch {
      setError('Eroare la conectarea cu serverul.');
    }

    setLoading(false);
  };

  const updateHistory = (title) => {
    setHistory((prev) => {
      const updated = [title, ...prev.filter(t => t.toLowerCase() !== title.toLowerCase())].slice(0, 3);
      localStorage.setItem('filmHistory', JSON.stringify(updated));
      return updated;
    });
  };

  const matchesGenre = () => {
    if (!movie || selectedGenre === 'Toate') return true;
    return movie.Genre?.includes(selectedGenre);
  };

  return (
    <div className="app">
      <h1>🎬 Recomandări de Film</h1>
      <SearchBar onSearch={fetchMovie} />
      <GenreFilter selected={selectedGenre} onSelect={setSelectedGenre} />
      <SearchHistory history={history} onSelect={fetchMovie} />
      {loading && <p className="loading">Se încarcă...</p>}
      {error && <p className="error">{error}</p>}
      {movie && matchesGenre() && <MovieCard movie={movie} />}
      {movie && !matchesGenre() && (
        <p className="error">Filmul găsit nu aparține genului selectat.</p>
      )}
    </div>
  );
}

export default App;