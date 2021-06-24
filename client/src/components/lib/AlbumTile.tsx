import React from 'react';
import { Link } from 'react-router-dom';
interface IAlbum {
  title: string;
  header?: string;
  albumArt: string;
  artist: JSX.Element | string;
  id: number;
}

const AlbumTile: React.FC<IAlbum> = ({
  title,
  header,
  artist,
  albumArt,
  id,
}) => {
  return (
    <Link
      key={title}
      className="w-1/3 m-4 mt-8 border-2 border-green-400 rounded"
      to={`releases/${id}`}
    >
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <strong className="text-xl">{header ? header : title}</strong>
      </div>
      <div className="p-4 text-center text-white border-b-4 border-green-400">
        <img alt="Cover Art" src={albumArt} />
      </div>
      <div className="p-4 text-white border-green-400">
        <strong className="text-xl text-center">
          {header ? '' : 'by: '}
          {header ? title : artist}
        </strong>
        <p>{header ? artist : ''}</p>
      </div>
    </Link>
  );
};

export default AlbumTile;
