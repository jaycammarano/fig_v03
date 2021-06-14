import * as TypeGraphQL from "type-graphql";
import { Artist } from "../../../models/Artist";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { Release } from "../../../models/Release";
import { ArtistArtistsOnReleasesArgs } from "./args/ArtistArtistsOnReleasesArgs";
import { ArtistReleasesArgs } from "./args/ArtistReleasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Artist)
export class ArtistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Release], {
    nullable: false
  })
  async releases(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ArtistReleasesArgs): Promise<Release[]> {
    return getPrismaFromContext(ctx).artist.findUnique({
      where: {
        id: artist.id,
      },
    }).releases(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistsOnReleases], {
    nullable: false
  })
  async artistsOnReleases(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ArtistArtistsOnReleasesArgs): Promise<ArtistsOnReleases[]> {
    return getPrismaFromContext(ctx).artist.findUnique({
      where: {
        id: artist.id,
      },
    }).artistsOnReleases(args);
  }
}
