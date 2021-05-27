import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => {
  return <pre>{lyrics}</pre>;
};
        
Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
