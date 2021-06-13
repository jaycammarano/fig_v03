import React from 'react';
export interface IArtistTab {
  artist: string;
}
const AboutTab: React.FC<IArtistTab> = ({ artist }) => {
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
