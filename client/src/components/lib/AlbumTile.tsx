import React from 'react';
import { Link } from 'react-router-dom';
import { Artist, ArtistsOnReleases } from './types';
interface IAlbum {
  title: string;
  header?: string;
  albumArt: string;
  artists: Artist[];
  id: number;
}

const AlbumTile: React.FC<IAlbum> = ({
  title,
  header,
  artists,
  albumArt,
  id,
}) => {
  // TODO FIXME
  const formattedArtistsForDisplay = artists
    .map((artist) => {
      return (
        <Link className="text-green-400 underline" to={`/artists/${artist.id}`}>
          {artist.name}
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
          {header ? title : formattedArtistsForDisplay}
        </strong>

        <p>
          {header ? 'by: ' : ''} {header ? formattedArtistsForDisplay : ''}
        </p>
      </div>
    </Link>
  );
};

export default AlbumTile;
