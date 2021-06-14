import * as TypeGraphQL from "type-graphql";
import { Artist } from "../../../models/Artist";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { Release } from "../../../models/Release";
import { Tag } from "../../../models/Tag";
import { ReleaseArtistsArgs } from "./args/ReleaseArtistsArgs";
import { ReleaseArtistsOnReleasesArgs } from "./args/ReleaseArtistsOnReleasesArgs";
import { ReleaseTagsArgs } from "./args/ReleaseTagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Release)
export class ReleaseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Artist], {
    nullable: false
  })
  async artists(@TypeGraphQL.Root() release: Release, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReleaseArtistsArgs): Promise<Artist[]> {
    return getPrismaFromContext(ctx).release.findUnique({
      where: {
        id: release.id,
      },
    }).artists(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() release: Release, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReleaseTagsArgs): Promise<Tag[]> {
    return getPrismaFromContext(ctx).release.findUnique({
      where: {
        id: release.id,
      },
    }).tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistsOnReleases], {
    nullable: false
  })
  async artistsOnReleases(@TypeGraphQL.Root() release: Release, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ReleaseArtistsOnReleasesArgs): Promise<ArtistsOnReleases[]> {
    return getPrismaFromContext(ctx).release.findUnique({
      where: {
        id: release.id,
      },
    }).artistsOnReleases(args);
  }
}
