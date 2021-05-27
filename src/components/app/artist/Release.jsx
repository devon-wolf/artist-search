import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ releaseTitle, year, coverArt }) => {
  return (
    <>
      <img alt="cover art" src={coverArt} style={{ width: '300px' }} />
      <p>{releaseTitle}</p>
      <p>{year}</p>
    </>
  );
};

Release.propTypes = {
  releaseTitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Release;
