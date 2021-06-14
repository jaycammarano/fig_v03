import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ARTISTABOUT } from '../../../GraphQL/queries';
export interface IArtistTab {
  artist: string;
}
const AboutTab: React.FC<IArtistTab> = ({ artist }) => {
  const [about, setAbout] = useState({
    lastFMArtist: {
      artist: {
        url: '',
        bio: {
          content: '',
        },
      },
    },
  });
  const { error, loading, data } = useQuery(ARTISTABOUT, {
    variables: { artist },
  });
  useEffect(() => {
    setAbout(data);
  }, [data]);
  return (
    <div>
      {artist}
      <p>Last.FM Bio</p>
      <p>Discogs Bio</p>
      <p>Spotify Bio?</p>
    </div>
  );
};

export default AboutTab;
