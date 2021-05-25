/* eslint-disable max-len */
import React, { useState } from 'react';
import { getArtists } from '../services/api-utils';

const Search = () => {
  // const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
	
  return (
    <div>
      <input value={searchTerm} onInput={e => setSearchTerm(e.target.value)} />
      <button onClick={() => getArtists(searchTerm).then(setArtists)}>Search</button>
      <ul>
        {artists && artists.map(artist => <li key={artist.id}>{artist.name}</li>)}
      </ul>
    </div>
  );
};


export default Search;

