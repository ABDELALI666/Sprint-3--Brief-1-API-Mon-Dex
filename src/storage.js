export function getFavorites() {
  return JSON.parse(localStorage.getItem('dex_favorites') || '[]');
}

export function saveFavorite(id) {
  const favs = getFavorites();
  if (!favs.includes(id)) {
    favs.push(id);
    localStorage.setItem('dex_favorites', JSON.stringify(favs));
  }
}

export function saveSearch(term) {
  sessionStorage.setItem('dex_last_search', term);
}