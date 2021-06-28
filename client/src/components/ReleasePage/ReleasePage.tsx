import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const ReleasePage: React.FC = () => {
  const [whichTab, setwhichTab] = useState('releases');
  let activeTab;
  if (whichTab === 'soundcloud') {
    activeTab = '';
  } else if (whichTab === 'about') {
    activeTab = '';
  } else if (whichTab === 'related') {
    activeTab = '';
  }

  return (
    <Layout>
      <div className="text-white ">
        <div className="m-2 font-bold text-white">
          <div>
            <img src="" alt="release cover" />
          </div>
          <div className="m-4 text-7xl">Release Title</div>
          <p className="m-4">
            Main Artists - Original Release Year - Release Type
          </p>
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
