import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ARTISTABOUT } from '../../../GraphQL/queries';
import DOMPurify from 'dompurify';

export interface IArtistTab {
  artist: string;
}

const AboutTab: React.FC<IArtistTab> = ({ artist }) => {
  const [about, setAbout] = useState({
    lastFMArtist: {
      artist: {
        url: '',
        bio: {
          content: 'loading',
        },
      },
    },
  });
  const sanitizer = DOMPurify.sanitize;
  const lastFMAbout = about
    ? sanitizer(about.lastFMArtist.artist.bio.content)
    : '<div>Loading</div>';
  const { error, loading, data } = useQuery(ARTISTABOUT, {
    variables: { artist },
  });
  useEffect(() => {
    setAbout(data);
  }, [data]);

  return (
    <div className="m-4">
      <h2 className="text-3xl">Last.FM Bio</h2>
      <div className="mt-2 mb-4">
        <div
          dangerouslySetInnerHTML={{
            __html: lastFMAbout,
          }}
        />
      </div>
      <h2 className="text-3xl">Discogs Bio</h2>
      <h2 className="text-3xl">Spotify Bio?</h2>
    </div>
  );
};

export default AboutTab;
