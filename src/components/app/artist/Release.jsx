import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title, year, coverArt }) => {
  return (
    <>
      <img alt="cover art" src={coverArt} style={{ width: '300px' }} />
      <p>{title}</p>
      <p>{year}</p>
    </>
  );
};

Release.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Release;
