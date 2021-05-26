/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReleases } from '../services/api-utils';


const Artist = () => {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState(null);
	
  const { artistID } = useParams();

  useEffect(() => {
    return getReleases(artistID)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ul>
        {loading
          ? <p>Loading</p>
          : releases.map(({ id, title, year, coverArt }) => (
            <li key={id}>
              <img alt="cover art" src={coverArt} />
              <p>{title}</p>
              <p>{year}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Artist;
