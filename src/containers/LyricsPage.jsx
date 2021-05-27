import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Lyrics from '../components/app/lyrics/Lyrics';
import { Spinner } from '../components/Spinner';
import { getLyrics } from '../services/api-utils';

const LyricsPage = () => {
  const { artistName, recordingTitle } = useParams();
  
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState('');
  
  useEffect(() => {
    getLyrics(artistName, recordingTitle)
      .then(setLyrics)
      .catch(() => setLyrics('NO LYRICS HERE'))
      .finally(() => setLoading(false));

  }, []);
  
  return (
    <div>
      <h1>{recordingTitle}</h1>
      {loading ? <Spinner/> : lyrics && <Lyrics lyrics={lyrics}/>}
    </div>
  );
};

export default LyricsPage;

