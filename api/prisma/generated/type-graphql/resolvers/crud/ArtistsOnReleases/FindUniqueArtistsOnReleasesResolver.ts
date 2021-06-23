import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueArtistsOnReleasesArgs } from "./args/FindUniqueArtistsOnReleasesArgs";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class FindUniqueArtistsOnReleasesResolver {
  @TypeGraphQL.Query(_returns => ArtistsOnReleases, {
    nullable: true
  })
  async findUniqueArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistsOnReleasesArgs): Promise<ArtistsOnReleases | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
