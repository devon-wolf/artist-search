import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Result from './Result';

const ResultsList = ({ artists }) => {
  return (
    <div>
      <ul aria-label="artists">
        {artists &&
          artists.map(({ artistID, name }) => (
            <Link key={artistID} to={`/artist/${artistID}`}>
              <li>
                <Result name={name} />
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

ResultsList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      artistID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultsList;
