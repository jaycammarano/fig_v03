import React from "react";

interface IArtist {
  name: string;
  header?: string;
  artistImage: string;
  tags: string[];
}

const AlbumTile: React.FC<IArtist> = ({ name, header, artistImage, tags }) => {
  const displayTags = tags.map((tag) => {
    return `${tag}, `;
  });
  return (
    <div className="w-1/3 m-4 mt-8 border-2 border-green-400 rounded">
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <strong className="text-xl">{header ? header : name}</strong>
      </div>
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <img alt="Cover Art" src={artistImage} />
      </div>
      <div className="p-4 text-justify text-white border-green-400">
        <strong className="text-xl text-center">
          {header ? name : `${tags}`}
        </strong>
        <p>{displayTags}</p>
      </div>
    </div>
  );
};

export default AlbumTile;
