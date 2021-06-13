import React from 'react';
import AlbumTile from '../../lib/AlbumTile';
import { Release } from '../../lib/types';

interface IReleaseTab {
  releases: Release[];
}

const ReleaseTab: React.FC<IReleaseTab> = ({ releases }) => {
  const releaseTiles = releases.map((release: Release) => {
    const artists = release.artists
      .map((artist) => {
        return `${artist.name}`;
      })
      .join(', ');
    return (
      <AlbumTile
        title={release.name}
        artist={artists}
        albumArt={release.image}
      />
    );
  });
  return <div>{releaseTiles}</div>;
};

export default ReleaseTab;
