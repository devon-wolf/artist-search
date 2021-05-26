/* eslint-disable max-len */
import React, { useState } from 'react';
import Controls from '../components/app/search/Controls';
import ResultsList from '../components/app/search/ResultsList';
import { Spinner } from '../components/Spinner';
import { getArtists } from '../services/api-utils';

const Search = () => {
  // const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getArtists(searchTerm)
      .then(setArtists)
      .finally(() => {
        setLoading(false), setPage(1);
      });
  };

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handlePageClick = (n1) => {
    setPage((n2) => n2 + n1);
    setLoading(true);
    getArtists(searchTerm, page)
      .then(setArtists)
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Controls
        onSubmit={handleFormSubmit}
        onInput={handleInputChange}
        onPageClick={handlePageClick}
        searchTerm={searchTerm}
        page={page}
      />
      {loading ? <Spinner /> : artists && <ResultsList artists={artists} />}
    </div>
  );
};

export default Search;
