import { gql } from "@apollo/client";

export const ARTIST = gql`
  query Artist($id: Int!){
    artist(where:{
      id: $id
    }){
      id
      name
      image
      releases{
        name
        type
        image
        releaseDate
        artists{
          name
        }
        tags{
          name
        }
      }
    }
  }
`;
