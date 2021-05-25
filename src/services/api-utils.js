/* eslint-disable max-len */
export const getArtists = (searchTerm) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`)
    .then(result => result.json())
    .then(({ artists }) => {
      return artists.map(({ id, name }) => ({
        id,
        name
      }));
    })
    .catch(console.error);
};

export const getReleases = (artistID) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`)
    .then(result => result.json())
    .then(({ releases }) => {
      return releases.map(({ id, title, date = null }) => ({
        id,
        title,
        year: date || 'unknown',
        coverArt: `http://coverartarchive.org/release/${id}/front`
      }));
    });
};

