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
    const artists = release.artistsOnReleases
      .map((subArtist) => {
        if (subArtist.role === 'MAIN') {
          return (
            <>
              <Link
                className="text-green-400 underline"
                to={`/artists/${subArtist.artist.id}`}
              >
                {subArtist.artist.name}
              </Link>
            </>
          );
        } else if (
          subArtist.role === 'REMIXER' &&
          artist !== subArtist.artist.name
        ) {
          return (
            <>
              Remixed By:{' '}
              <Link
                className="text-green-400 underline"
                to={`/artists/${subArtist.artist.id}`}
              >
                {subArtist.artist.name}
              </Link>
            </>
          );
        }
        return (
          <Link
            className="text-green-400 underline"
            to={`/artists/${subArtist.artist.id}`}
          >
            {subArtist.artist.name}
          </Link>
        );
      })
      .reduce((acc, x) =>
        !acc ? (
          x
        ) : (
          <>
            {acc}, {x}
          </>
        )
      );

    return (
      <AlbumTile
        id={release.id}
        title={release.name}
        artist={artists}
        albumArt={release.image}
      />
    );
  });
  return <div className="flex flex-row">{releaseTiles}</div>;
};

export default ReleaseTab;
