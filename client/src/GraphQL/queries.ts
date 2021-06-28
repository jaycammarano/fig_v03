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
