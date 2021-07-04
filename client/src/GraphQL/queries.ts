import { gql } from "@apollo/client";

export const ARTIST = gql`
   query Artist($id: Int!) {
    artist(where: { id: $id }) {
      name
      image
      releases {
        name
        image
        type
        id
        artistsOnReleases {
          artist {
            name
            id
          }
          role
        }
      }
    }
  }
`;

export const ARTISTABOUT = gql`
  query LFMArtist($artist: String!){
    lastFMArtist(artist: $artist){
      artist{
        url
        bio{
          content
        }
      }
    }
  }
`

export const HOMEPAGE = gql`
  query HomePage{
    artists{
      id
      name
      image
    }
    releases{
      artists{
        id
        name
      }
      id
      name
      image
    }
  }
`

export const RELEASEPAGE = gql`
  query ReleaseInfo($id: Int!){
  release(where: {id: $id}){
    name
    id
    image
    releaseDate
    url
    tags{
      name
    }
    type
    artistsOnReleases{
      artistId
      artist{
        name
      }
      role
    }
  }
}
`
export const ALBUMINFO = gql`
  query LFMAlbums($albumName: String! $artistName: String!) {
    lastFMAlbum(artist: $artistName, album: $albumName){
      album{ 
        url
      wiki{
        summary
        content
      }}
    }
  }
`

export const ALLBLOGS = gql`
  query AllBlogs{
    blogs {
      id
      title
      content
      createdBy
      createdAt
      tags {
        name
      }
    }
  }
`

export const BLOG = gql`
  query {
    blogs {
      id
      title
      content
      createdBy
      createdAt
      tags {
        name
      }
    }
  }
`


export const DISCOGS_ID_LOOKUP = gql`
  query discogsIDSearch($releaseTitle: String! $artist: String!){
    discogsReleaseSearch(releaseTitle: $releaseTitle, artist: $artist){
    id
  }
}
`

export const DISCOGS_RELEASE_LOOKUP = gql`
  query DiscogsReleaseLookUp($id: Float!) {
    discogsReleaseLookUp(id: $id) {
      artists{
        name
        anv
      }
      styles
      genres
      videos{
        uri
      }
      tracklist{
        position
        title
        duration
        extraartists{
          role
          name
          anv
        }
      }
    }
  }
`