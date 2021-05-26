/* eslint-disable max-len */
export const getArtists = (searchTerm) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`)
    .then(result => result.json())
    .then(({ artists }) => {
      return artists.map(({ id, name }) => ({
        artistID: id,
        name
      }));
    })
    .catch(console.error);
};

export const getReleases = (artistID) => {

  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`)
    .then(result => result.json())
    .then(({ releases }) => {
      return releases.map(release => ({
        releaseID: release.id,
        title: release.title,
        year: release.date || 'unknown',
        coverArt: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://placekitten.com/200/300'
      }));
    })
    .catch(console.error);
};

// const isThereCoverArt = (id) => {
// 	return fetch(`http://coverartarchive.org/release/${id}/front`)
// 	  .then(response => response.ok);
//   };

// export const awaitGetReleases = async (artistID) => {
//   const response = await fetch(`http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`);

//   const { releases } = await response.json();

//   return releases.map(async ({ id, title, date = null }) => {
//     const coverArt = await isThereCoverArt(id);
//     console.log(coverArt);
//     return {
//       id,
//       title,
//       year: date || 'unknown',
//       coverArt: coverArt ? `http://coverartarchive.org/release/${id}/front` : 'https://placekitten.com/200/300'
//     };
//   });
// };

