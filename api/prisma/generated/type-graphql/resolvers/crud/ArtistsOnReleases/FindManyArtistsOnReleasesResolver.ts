import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyArtistsOnReleasesArgs } from "./args/FindManyArtistsOnReleasesArgs";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class FindManyArtistsOnReleasesResolver {
  @TypeGraphQL.Query(_returns => [ArtistsOnReleases], {
    nullable: false
  })
  async findManyArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistsOnReleasesArgs): Promise<ArtistsOnReleases[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
