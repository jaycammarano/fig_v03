import React from 'react';

const ArtistPage: React.FC = () => {
  // fetch name and releases
  // lazy load bio from Last.FM +/or discogs
  // lazy load similar artists based on tags?
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
      </div>
    </div>
  );
};

export default ArtistPage;
