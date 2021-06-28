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
}
