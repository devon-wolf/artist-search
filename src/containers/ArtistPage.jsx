/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReleaseList from '../components/app/artist/ReleaseList';
import { Spinner } from '../components/Spinner';
import { getReleases } from '../services/api-utils';

const ArtistPage = () => {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState(null);

  const { artistID, artistName } = useParams();

  useEffect(() => {
    return getReleases(artistID)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>{artistName}</h1>
      {loading ? <Spinner/> : <ReleaseList releases={releases} />}
    </div>
  );
};
                

export default ArtistPage;
