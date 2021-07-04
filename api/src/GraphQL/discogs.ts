import "reflect-metadata";
import { env } from "process";
import fetch from "node-fetch";
import { Arg, Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class DiscogsVideo {
    @Field()
    uri!: String;

}
@ObjectType()
class DiscogsArtist {
    @Field()
    name!: String;
    @Field()
    anv!: String;
    @Field()
    role!: String

}

@ObjectType()
class DiscogsTracklist {
    @Field()
    duration!: String;
    @Field()
    position!: String;
    @Field()
    title!: String;
    @Field(() => [DiscogsArtist], {nullable: true})
    extraartists!: [DiscogsArtist] | null
}
@ObjectType()
class DiscogsRelease {
  @Field()
  id!: Number
  @Field(() => [String])
  styles!: String[];
  @Field()
  title!: String
  @Field(() => [String])
  label!: [String]
  @Field(() => [String])
  genres!: String[]
  @Field(() => [DiscogsVideo], {nullable: true})
  videos!: [DiscogsVideo]
  @Field(() => [DiscogsArtist])
  artists!: [DiscogsArtist]
  @Field(() => [DiscogsTracklist])
  tracklist!: [DiscogsTracklist]
}
@Resolver()
export class DiscogsResolver {
  @Query((returns) => DiscogsRelease)
  async discogsReleaseSearch(
    @Arg("artist") artist: string,
    @Arg("releaseTitle") releaseTitle: string
  ): Promise<DiscogsRelease | null> {
    const response = await fetch(
    `https://api.discogs.com/database/search?type=master&release_title=${releaseTitle}&artist=${artist}&key=${env["DISCOGS_KEY"]}&secret=${env["DISCOGS_SECRET"]}&page=1&per_page=1`,
    {
      headers: { "User-Agent": "Fig/0.3" }
    });
    const jsonResp = await response.json()
    console.log( jsonResp.results[0])
    return await jsonResp.results[0];
  }

  @Query((returns) => DiscogsRelease)
  async discogsReleaseLookUp(
    @Arg("id") id: number
  ): Promise<DiscogsRelease | null> {
    const response = await fetch(
    `https://api.discogs.com/masters/${id}`,
    {
      headers: { "User-Agent": "Fig/0.3" }
    });
    return await response.json()
  }
}
