import * as TypeGraphQL from "type-graphql";
import { Artist } from "../../../models/Artist";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { Release } from "../../../models/Release";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class ArtistsOnReleasesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Artist, {
    nullable: true
  })
  async artist(@TypeGraphQL.Root() artistsOnReleases: ArtistsOnReleases, @TypeGraphQL.Ctx() ctx: any): Promise<Artist | null> {
    return getPrismaFromContext(ctx).artistsOnReleases.findUnique({
      where: {
        artistId_releaseId: {
          artistId: artistsOnReleases.artistId,
          releaseId: artistsOnReleases.releaseId,
        },
      },
    }).artist({});
  }

  @TypeGraphQL.FieldResolver(_type => Release, {
    nullable: true
  })
  async release(@TypeGraphQL.Root() artistsOnReleases: ArtistsOnReleases, @TypeGraphQL.Ctx() ctx: any): Promise<Release | null> {
    return getPrismaFromContext(ctx).artistsOnReleases.findUnique({
      where: {
        artistId_releaseId: {
          artistId: artistsOnReleases.artistId,
          releaseId: artistsOnReleases.releaseId,
        },
      },
    }).release({});
  }
}
