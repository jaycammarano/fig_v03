import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByArtistsOnReleasesArgs } from "./args/GroupByArtistsOnReleasesArgs";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { ArtistsOnReleasesGroupBy } from "../../outputs/ArtistsOnReleasesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class GroupByArtistsOnReleasesResolver {
  @TypeGraphQL.Query(_returns => [ArtistsOnReleasesGroupBy], {
    nullable: false
  })
  async groupByArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistsOnReleasesArgs): Promise<ArtistsOnReleasesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistsOnReleases.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
