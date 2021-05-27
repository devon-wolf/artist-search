/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Release from './Release';

const ReleaseList = ({ releases, artistName }) => {
  return (
    <ul aria-label="release-list">
        
      {releases.map(({ releaseID, releaseTitle, year, coverArt }) => (
        <Link to={`/release/${releaseID}/${artistName}/${releaseTitle}`}key={releaseID}>
          <li>
            <Release releaseTitle={releaseTitle} year={year} coverArt={coverArt}/>
          </li>
        </Link>
      ))}
        
    </ul>
  );
};

ReleaseList.propTypes = {
  releases:PropTypes.arrayOf(PropTypes.shape({
    releaseID: PropTypes.string.isRequired,
    releaseTitle: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    coverArt: PropTypes.string.isRequired,
  })).isRequired,
  artistName: PropTypes.string.isRequired,
};

export default ReleaseList;
