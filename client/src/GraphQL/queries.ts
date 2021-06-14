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