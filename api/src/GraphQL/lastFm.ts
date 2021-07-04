import "reflect-metadata";
import { env } from "process";
import fetch from "node-fetch";
import { Arg, Field, ObjectType, Query, Resolver } from "type-graphql";
// about resolver
// takes in name of artist
// searches lastfm for artist
// returns bio, related artists
@ObjectType()
class LFMBio {
  @Field()
  summary!: string;
  @Field()
  content!: string;
}

@ObjectType()
class LFMArtist {
  @Field()
  name!: string;
  @Field()
  url!: string;
  @Field(() => LFMBio)
  bio!: LFMBio;
}

@ObjectType()
class LFMArtistReturn {
  @Field(() => LFMArtist)
  artist!: LFMArtist[];
}


@ObjectType()
class LFMAlbum {
  @Field()
  name!: string;
  @Field()
  artist!: string;
  @Field()
  url!: string;
  @Field()
  wiki!: LFMBio;
}

@ObjectType()
class LFMAlbumReturn {
  @Field(() => LFMAlbum)
  album!: LFMAlbum[];
}

@Resolver()
export class LastFMResolver {
  @Query((returns) => LFMArtistReturn)
  async lastFMArtist(
    @Arg("artist") artist: string
  ): Promise<LFMArtistReturn | null> {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${env["LASTFM_API_KEY"]}&format=json`
    );
    return response.json();
  }

  @Query((returns) => LFMAlbumReturn)
  async lastFMAlbum(
    @Arg("album") album: string,
    @Arg("artist") artist: string
  ): Promise<LFMArtistReturn | null> {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=%208dc653ee70d6c459d6cffd957c4b8081&artist=${artist}&album=${album}&format=json`
    );
    return response.json();
  }
}
