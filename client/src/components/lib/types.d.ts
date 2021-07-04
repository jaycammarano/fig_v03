export type Release = {
  id: number
  artistsOnReleases: ArtistsOnReleases[]
  image: string;
  name: string;
  releaseDate: Date
  tags: Tag[];
  type: string
  url?: string
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
  id: number
  name: string
  releases?: Release[]
  image?: string
}

export type Track = {
  position: string
  title: string
  duration: string
}
