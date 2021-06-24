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
      name
      image
    }
  }
`