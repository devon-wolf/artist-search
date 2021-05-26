import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Release from './Release';

const ReleaseList = ({ releases }) => {
  return (
    <ul>
        
      {releases.map(({ releaseID, title, year, coverArt }) => (
        <Link to={`/release/${releaseID}`}key={releaseID}>
          <li>
            <Release title={title} year={year} coverArt={coverArt}/>
          </li>
        </Link>
      ))}
        
    </ul>
  );
};

ReleaseList.propTypes = {
  releases:PropTypes.arrayOf(PropTypes.shape({
    releaseID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    coverArt: PropTypes.string.isRequired,
  })).isRequired
};

export default ReleaseList;
