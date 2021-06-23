import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ARTIST } from '../../GraphQL/queries';
import { Release } from '../lib/types';
import ReleaseTab from './tabs/ReleaseTab';
import AboutTab from './tabs/AboutTab';
import RelatedTab from './tabs/RelatedTab';
interface IArtistPage {
  location: Location;
}

const ArtistPage: React.FC<IArtistPage> = ({ location }) => {
  const release: Release = {
    name: '',
    image: '',
    releaseDate: new Date(),
    type: 'SINGLE',
    artistsOnReleases: [
      { artist: { name: '', id: '' }, id: '1', role: 'MAIN' },
    ],
    tags: [{ name: '' }],
  };

  const [artist, setArtist] = useState({
    artist: {
      name: '',
      releases: [release],
      image: 'image',
    },
  });

  const [whichTab, setwhichTab] = useState('releases');

  const artistID = parseInt(location.pathname.split('/')[2]);
  const { error, loading, data } = useQuery(ARTIST, {
    variables: { id: artistID },
  });

  useEffect(() => {
    setArtist(data);
  }, [data]);
  // lazy load bio from Last.FM +/or discogs
  // lazy load similar artists based on tags?
  let activeTab;
  if (artist && whichTab === 'releases') {
    activeTab = (
      <ReleaseTab
        artist={artist.artist.name}
        releases={artist.artist.releases}
      />
    );
  } else if (artist && whichTab === 'about') {
    activeTab = <AboutTab artist={artist.artist.name} />;
  } else if (whichTab === 'related') {
    activeTab = <RelatedTab artist={artist.artist.name} />;
  }

  return (
    <div className="text-white ">
      <div className="m-2 font-bold text-white">
        <div className="m-4 text-7xl">{artist ? artist.artist.name : ''}</div>
        <div className="flex flex-row">
          <div
            onClick={() => setwhichTab('releases')}
            className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded focus:border-green-300 hover:border-green-300 hover:border-2"
          >
            Releases
          </div>
          <div
            onClick={() => setwhichTab('about')}
            className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2"
          >
            About
          </div>
          <div
            onClick={() => setwhichTab('related')}
            className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2"
          >
            Related
          </div>
        </div>
        {activeTab}
      </div>
    </div>
  );
};

export default ArtistPage;
