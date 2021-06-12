import React from 'react';
import Layout from './Layout/Layout';
import AlbumTile from './lib/AlbumTile';

const HomePage: React.FC = () => {
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
        <div>
          <AlbumTile
            title="title"
            header="Most Recent Album"
            artist="artist"
            albumArt=""
          />
        </div>
      </div>
      ;
    </Layout>
  );
};

export default HomePage;
