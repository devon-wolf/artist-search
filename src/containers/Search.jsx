/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
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
  const [count, setCount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getArtists(searchTerm)
      .then(({ artists, count }) => {
        setArtists(artists);
        setCount(count);
      })
      .finally(() => {
        setLoading(false), setPage(1);
      });
  };

  useEffect(() => {
    if (artists.length) {
      setLoading(true);
      getArtists(searchTerm, page)
        .then(({ artists, count }) => {
          setArtists(artists);
          setCount(count);
        })
        .finally(() => setLoading(false));
    }
  }, [page]);

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handlePageClick = (n) => {
    setPage((prevPage) => prevPage + n);
    // setPage(page + n);
  };

  return (
    <div>
      <Controls
        onSubmit={handleFormSubmit}
        onInput={handleInputChange}
        onPageClick={handlePageClick}
        searchTerm={searchTerm}
        page={page}
        count={count}
      />
      {loading ? <Spinner /> : artists && <ResultsList artists={artists} />}
    </div>
  );
};

export default Search;
