import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ARTIST } from '../GraphQL/queries';
import { Release } from './lib/types';
import AlbumTile from './lib/AlbumTile';
interface IArtistPage {
  location: Location;
}

const ArtistPage: React.FC<IArtistPage> = ({ location }) => {
  const release: Release = {
    name: '',
    type: '',
    image: '',
    releaseDate: new Date(),
    artists: [{ name: '' }],
    tags: [{ name: '' }],
  };

  const [artist, setArtist] = useState({
    artist: {
      name: '',
      releases: [release],
      image: 'image',
    },
  });

  const artistID = parseInt(location.pathname.split('/')[2]);
  const { error, loading, data } = useQuery(ARTIST, {
    variables: { artistID },
  });
  useEffect(() => {
    setArtist(data);
  }, [data]);
  // lazy load bio from Last.FM +/or discogs
  // lazy load similar artists based on tags?
  let releaseTiles;
  if (artist.artist.releases) {
    releaseTiles = artist.artist.releases.map((release: Release) => {
      const artists = release.artists.join(', ');
      return (
        <AlbumTile
          title={release.name}
          artist={artists}
          albumArt={release.image}
        />
      );
    });
  }
  return (
    <div className="text-white ">
      <div className="m-2 font-bold text-white">
        <div className="m-4 text-7xl">Artist Name</div>
        <div className="flex flex-row">
          <div className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded focus:border-green-300 hover:border-green-300 hover:border-2">
            Releases
          </div>
          <div className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Bio
          </div>
          <div className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Related
          </div>
        </div>
        {releaseTiles}
      </div>
    </div>
  );
};

export default ArtistPage;
