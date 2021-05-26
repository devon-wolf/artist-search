import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ name }) => {
  return <p>{name}</p>;
};

Result.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Result;
