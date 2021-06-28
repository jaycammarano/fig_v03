import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { RELEASEPAGE } from '../../GraphQL/queries';
import Layout from '../Layout/Layout';

const ReleasePage: React.FC = (id) => {
  const starterRelease = {
    release: {
      id: 0,
      name: '',
      image: '',
      releaseDate: new Date(),
      type: 'SINGLE',
      artistsOnReleases: [
        { artist: { name: '', id: 0 }, id: '1', role: 'MAIN' },
      ],
      tags: [{ name: '' }],
    },
  };
  const [releaseData, setReleaseData] = useState(starterRelease);
  const { error, loading, data } = useQuery(RELEASEPAGE, {
    variables: { id: 1 },
  });

  useEffect(() => {
    setReleaseData(data);
  }, [data]);
  const [whichTab, setwhichTab] = useState('releases');
  let activeTab;
  if (whichTab === 'soundcloud') {
    activeTab = '';
  } else if (whichTab === 'about') {
    activeTab = '';
  } else if (whichTab === 'related') {
    activeTab = '';
  }
  let releaseDateTime;
  if (releaseData && releaseData.release.releaseDate) {
    releaseDateTime = new Date(releaseData.release.releaseDate);
  }
  return (
    <Layout>
      <div className="text-white ">
        <div className="m-2 font-bold text-white">
          <div className="flex flex-row">
            <div>
              <img
                src={releaseData ? releaseData.release.image : ''}
                alt="release cover"
              />
            </div>
            <div>
              <div className="m-4 text-7xl">
                {releaseData ? releaseData.release.name : ''}
              </div>
              <p className="m-4">
                Main Artists -{' '}
                {releaseData ? releaseDateTime?.toLocaleDateString() : ''} -{' '}
                {releaseData ? releaseData.release.type : ''}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div
              onClick={() => setwhichTab('soundcloud')}
              className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded focus:border-green-300 hover:border-green-300 hover:border-2"
            >
              Listen
            </div>
            <div
              onClick={() => setwhichTab('youtube')}
              className="w-1/3 px-8 py-3 pr-32 m-2 text-3xl bg-green-500 border-4 border-green-500 rounded hover:border-green-300 hover:border-2"
            >
              Credits
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
    </Layout>
  );
};

export default ReleasePage;
