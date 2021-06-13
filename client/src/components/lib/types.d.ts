export type Release = {
  name: string;
  tags: Tag[];
  image: string;
  releaseDate: Date
  type: string
  artists: Artist[]
};

type Tag = {
  name: string
}

type Artist = {
  name: string
  releases?: Release[]
  image?: string
}