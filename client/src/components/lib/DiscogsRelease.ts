import { useQuery } from "@apollo/client";
import { DISCOGS_ID_LOOKUP, DISCOGS_RELEASE_LOOKUP } from "../../GraphQL/queries";
import { Track } from "./types";

const DiscogsReleaseLookup = (id: number) => {
  const { error, loading, data } = useQuery(DISCOGS_RELEASE_LOOKUP, {
    variables: { id }
  });
  return data
}

export const DiscogsSearchForID = (artist: string, releaseTitle: string, setter: React.Dispatch<React.SetStateAction<{
  discogsReleaseLookUp: {
      artists: {
          name: string;
          anv: string;
      }[];
      styles: string[];
      genres: string[];
      videos: {
          uri: string;
      }[];
      tracklist: {
          position: string;
          title: string;
          duration: string;
          extraartists: {
            role: string; name: string; anv: string
          }[];
      }[];
  };
}>>) => {
    const { error, loading, data } = useQuery(DISCOGS_ID_LOOKUP, {
      variables: { artist, releaseTitle }
    });
    const id = data ? data.discogsReleaseSearch.id : 0
    setter(DiscogsReleaseLookup(id))
}

