// Autor: Raul
// Modul de caching în memorie pentru rezultatele API.
// Raul a implementat acest sistem pentru a evita cereri duplicate către OMDb API —
// fiecare rezultat este stocat cu un timestamp de expirare (TTL implicit: 5 minute).

const cache = {};

// Returnează datele din cache dacă există și nu au expirat; altfel șterge intrarea expirată.
export const getFromCache = (key) => {
  const entry = cache[key];
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    delete cache[key];
    return null;
  }
  return entry.data;
};

// Salvează datele în cache cu un timp de expirare calculat din momentul apelului.
export const saveToCache = (key, data, ttl = 300000) => {
  cache[key] = { data, expiresAt: Date.now() + ttl };
};