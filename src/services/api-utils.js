/* eslint-disable max-len */
export const getArtists = (searchTerm, page) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25&offset=${
      page ? (page - 1) * 25 + 1 : 0
    }`
  )
    .then((result) => result.json())
    .then(({ artists, count }) => {
      return {
        artists: artists.map(({ id, name }) => ({
          artistID: id,
          name,
        })),
        count,
      };
    })
    .catch(console.error);
};

export const getReleases = (artistID) => {
  return fetch(
    `http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`
  )
    .then((result) => result.json())
    .then(({ releases }) => {
      return releases.map((release) => ({
        releaseID: release.id,
        title: release.title,
        year: release.date || 'unknown',
        coverArt: release['cover-art-archive'].front
          ? `http://coverartarchive.org/release/${release.id}/front`
          : 'https://placekitten.com/200/300',
      }));
    })
    .catch(console.error);
};

//song by release
export const getRecordings = (releaseID) => {
  return fetch(
    `http://musicbrainz.org/ws/2/recording?release=${releaseID}&fmt=json`
  )
    .then((result) => result.json())
    .then(({ recordings }) => {
      return recordings.map(({ id, title }) => ({
        recordingID: id,
        title,
      }));
    })
    .catch(console.error);
};

//lyrics by song
export const getLyrics = (artistName, recordingTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${recordingTitle}`)
    .then((result) => result.json())
    .then(({ lyrics }) => lyrics);
};
