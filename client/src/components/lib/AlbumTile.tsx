import React from "react";
interface IAlbum {
  title: string;
  header?: string;
  artist: string;
  albumArt: string;
}

const AlbumTile: React.FC<IAlbum> = ({ title, header, artist, albumArt }) => {
  return (
    <div className="w-1/3 m-4 mt-8 border-2 border-green-400 rounded">
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <strong className="text-xl">{header ? header : title}</strong>
      </div>
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <img alt="Cover Art" src={albumArt} />
      </div>
      <div className="p-4 text-justify text-white border-green-400">
        <strong className="text-xl text-center">
          {header ? title : `by ${artist}`}
        </strong>
        <p>{header ? ` by ${artist}` : ""}</p>
      </div>
    </div>
  );
};

export default AlbumTile;
