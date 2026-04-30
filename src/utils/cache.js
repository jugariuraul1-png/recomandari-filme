const cache = {};

export const getFromCache = (key) => {
  const entry = cache[key];
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    delete cache[key];
    return null;
  }
  return entry.data;
};

export const saveToCache = (key, data, ttl = 300000) => {
  cache[key] = { data, expiresAt: Date.now() + ttl };
};