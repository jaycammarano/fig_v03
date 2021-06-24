import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../GraphQL/queries';
import Layout from './Layout/Layout';
import AlbumTile from './lib/AlbumTile';
import ArtistTile from './lib/ArtistTile';

const HomePage: React.FC = () => {
  const [artistsAndReleases, setArtistsAndReleases] = useState({
    artists: [
      {
        id: 0,
        name: '',
        image: '',
      },
    ],
    releases: [
      {
        artists: [
          {
            id: '',
            name: '',
          },
        ],
        name: '',
        image: '',
      },
    ],
  });

  const { error, loading, data } = useQuery(HOMEPAGE);

  useEffect(() => {
    setArtistsAndReleases(data);
  }, [data]);
  let displayAllReleases;
  if (artistsAndReleases) {
    displayAllReleases = artistsAndReleases.releases
      .reverse()
      .map((release) => {
        const artists = release.artists
          .map((subArtist) => {
            return (
              <Link
                className="text-green-400 underline"
                to={`/artists/${subArtist.id}`}
              >
                {subArtist.name}
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
            title={release.name}
            artist={artists}
            albumArt={release.image}
          />
        );
      });
  }

  const mostRecentArtist = artistsAndReleases
    ? artistsAndReleases.artists[artistsAndReleases.artists.length - 1]
    : { id: 0, name: '', image: '' };
  const mostRecentRelease = artistsAndReleases
    ? artistsAndReleases.releases[artistsAndReleases.releases.length - 1]
    : { id: '', name: '', image: '' };
  let displayAllArtists;
  if (artistsAndReleases) {
    displayAllArtists = artistsAndReleases.artists.map((artist) => {
      return (
        <ArtistTile
          id={artist.id}
          name={artist.name}
          artistImage={artist.image}
          tags={['rock', 'hyperpop', 'pop.punk']}
        />
      );
    });
  }

  return (
    <Layout>
      <div className="m-2 font-bold text-white">
        <div className="m-4 text-7xl">Browse</div>
        <div className="flex flex-row">
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Artists
          </div>
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2">
            Albums
          </div>
          <div className="px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300">
            Random
          </div>
        </div>
        <div>
          <div className="m-4 mt-8">
            <strong className="m-2">Filter By </strong>
            <input
              className="px-4 py-1 bg-gray-700 rounded focus:border-2 focus:border-green-400 focus:bg-black"
              value="Search Tags"
            />
          </div>
        </div>
        <div className="flex flex-row m-auto">
          <AlbumTile
            title={mostRecentRelease.name}
            header="Most Recent Album"
            artist="artist"
            albumArt={mostRecentRelease.image}
          />
          <ArtistTile
            name={mostRecentArtist.name}
            id={mostRecentArtist.id}
            header="Most Recent Artist"
            artistImage={mostRecentArtist.image}
            tags={['rock', 'hyperpop', 'pop.punk']}
          />
        </div>
        <div>
          <h1 className="px-4 py-3 pr-24 mt-24 text-5xl text-center w-max">
            All Releases
          </h1>

          {displayAllReleases ? displayAllReleases : ''}
        </div>
        <div>
          <h1 className="px-4 py-3 pr-24 mt-24 text-5xl text-center w-max">
            All Artists
          </h1>
          <div className="flex flex-row">
            {displayAllArtists ? displayAllArtists : ''}
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default HomePage;
