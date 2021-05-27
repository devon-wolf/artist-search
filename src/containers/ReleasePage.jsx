/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecordings } from '../services/api-utils';
import { Spinner } from '../components/Spinner';
import RecordingList from '../components/app/release/RecordingList';

const ReleasePage = () => {
  const { releaseID, artistName } = useParams();

  const [loading, setLoading] = useState(true);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getRecordings(releaseID)
      .then(setRecordings)
      .finally(() => setLoading(false));
    
  }, []);
  
  return (
    <div>
      {loading ? <Spinner/> : <RecordingList artistName={artistName} recordings={recordings}/>}
    </div>
  );
};

export default ReleasePage;
