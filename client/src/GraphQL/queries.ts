import { gql } from "@apollo/client";

export const ARTIST = gql`
   query Artist($id: Int!) {
    artist(where: { id: $id }) {
        name
        releases {
          name
        image
        ArtistsOnReleases {
          artist {
            id
            name
          }
          role
        }
        id
        type
      }
    }
  }
`;
