import React from 'react';
import { Link } from 'react-router-dom';
import AlbumTile from '../../lib/AlbumTile';
import { Release } from '../../lib/types';

interface IReleaseTab {
  artist: string;
  releases: Release[];
}

const ReleaseTab: React.FC<IReleaseTab> = ({ artist, releases }) => {
  const releaseTiles = releases.map((release: Release) => {
    const typeOfArtist = release.artistsOnReleases.map((artist) => {
      return {
        name: artist.artist.name,
        id: artist.artist.id,
        role: artist.role,
      };
    });

    return (
      <AlbumTile
        id={release.id}
        title={release.name}
        artists={typeOfArtist}
        albumArt={release.image}
      />
    );
  });
  return <div className="flex flex-row">{releaseTiles}</div>;
};

export default ReleaseTab;
