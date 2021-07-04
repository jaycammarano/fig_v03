import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { RELEASEPAGE } from '../../GraphQL/queries';
import Layout from '../Layout/Layout';
import SoundCloudEmbed from './SoundCloudEmbed';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { DiscogsSearchForID } from '../lib/DiscogsRelease';
interface IReleasePage {
  location: Location;
}
const ReleasePage: React.FC<IReleasePage> = ({ location }) => {
  const starterRelease = {
    release: {
      id: 0,
      name: '',
      image: '',
      url: '',
      releaseDate: new Date(),
      type: 'SINGLE',
      artistsOnReleases: [
        { artist: { name: '', id: 0 }, artistId: '1', role: 'MAIN' },
      ],
      tags: [{ name: '' }],
    },
  };

  const [releaseData, setReleaseData] = useState(starterRelease);
  const [discogsInfo, setDiscogsInfo] = useState({
    discogsReleaseLookUp: {
      artists: [
        {
          name: 'rizzla',
          anv: 'rizzla',
        },
        {
          name: 'Blk Adonis',
          anv: 'blk.adonis',
        },
      ],
      styles: ['ballroom'],
      genres: ['electronic'],
      videos: [
        {
          uri: '',
        },
      ],
      tracklist: [
        {
          position: '1',
          title: '',
          duration: '',
          extraartists: [{ role: '', name: '', anv: '' }],
        },
      ],
    },
  });
  const { error, loading, data } = useQuery(RELEASEPAGE, {
    variables: { id: parseInt(location.pathname.split('/')[2]) },
  });

  useEffect(() => {
    setReleaseData(data);
  }, [data]);

  // DiscogsSearchForID('nirvana', 'nevermind', setDiscogsInfo);

  let releaseDateTime;
  if (releaseData) {
    releaseDateTime = new Date(
      releaseData.release.releaseDate
    ).toLocaleDateString();
  }
  let displayMainArtists;
  if (releaseData && releaseData.release.artistsOnReleases) {
    displayMainArtists = releaseData.release.artistsOnReleases
      .map((artist) => {
        if (artist.role === 'MAIN') {
          return (
            <Link
              className="text-green-400 underline"
              to={`/artists/${artist.artistId}`}
            >
              {artist.artist.name}
            </Link>
          );
        }
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
  }
  return (
    <Layout>
      <div className="text-white ">
        <div className="m-2 font-bold text-white">
          <div className="">
            <div className="flex flex-row">
              <div>
                <img
                  className="h-72"
                  src={releaseData ? releaseData.release.image : ''}
                  alt="release cover"
                />
              </div>
              <div>
                <div className="m-4 text-7xl">
                  {releaseData ? releaseData.release.name : ''}
                </div>
                <p className="m-4 text-2xl">
                  {displayMainArtists} - {releaseData ? releaseDateTime : ''} -{' '}
                  {releaseData ? releaseData.release.type : ''}
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-24 mb-44">
              <Scroll className="text-white" to="listen">
                <div className="px-8 py-3 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded pr-44 focus:border-green-300 hover:border-green-300 hover:border-2">
                  Listen
                </div>
              </Scroll>
              <Scroll className="text-white" to="credits">
                <div className="px-8 py-3 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded pr-44 focus:border-green-300 hover:border-green-300 hover:border-2">
                  Credits
                </div>
              </Scroll>
              <Scroll className="text-white" to="related">
                <div className="px-8 py-3 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded pr-44 focus:border-green-300 hover:border-green-300 hover:border-2">
                  Related
                </div>
              </Scroll>
            </div>
          </div>
          <div id="listen" className="m-4 mb-24">
            <div className="my-4 text-5xl">Listen</div>
            <SoundCloudEmbed
              url={releaseData ? releaseData.release.url : ''}
              title={releaseData ? releaseData.release.name : ''}
            />
          </div>
        </div>
        <div id="credits" className="m-4">
          <div className="my-4 text-5xl">Credits</div>
          <div>
            <h3 className="my-4 text-3xl">Tracklisting</h3>
          </div>
        </div>
        <div id="related" className="m-4">
          <div className="my-4 text-5xl">Related</div>
        </div>
      </div>
    </Layout>
  );
};

export default ReleasePage;
