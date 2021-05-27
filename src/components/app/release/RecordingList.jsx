import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingList = ({ recordings, artistName }) => {
    
  return (
    <ul>
      {recordings.map(({ recordingID, recordingTitle }) => (
        <Link key={recordingID} to={`/song/${artistName}/${recordingTitle}`}>
          <li>
            {recordingTitle}
          </li>
        </Link>
      ))}
    </ul>
  );
};


RecordingList.propTypes = {
  recordings: PropTypes.arrayOf(PropTypes.shape({
    recordingID: PropTypes.string.isRequired,
    recordingTitle: PropTypes.string.isRequired,
  })).isRequired,
  artistName: PropTypes.string.isRequired,
};

export default RecordingList;
