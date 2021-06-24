export type Release = {
  id: number
  artistsOnReleases: ArtistsOnReleases[]
  image: string;
  name: string;
  releaseDate: Date
  tags: Tag[];
  type: string
};

type Tag = {
  name: string
}

type ArtistsOnReleases = {
  id: string
  artist: Artist
  role: string
}

type Artist = {
  id: string
  name: string
  releases?: Release[]
  image?: string
}