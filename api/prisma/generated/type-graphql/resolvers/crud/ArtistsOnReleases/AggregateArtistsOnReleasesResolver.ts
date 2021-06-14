import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArtistsOnReleasesArgs } from "./args/AggregateArtistsOnReleasesArgs";
import { ArtistsOnReleases } from "../../../models/ArtistsOnReleases";
import { AggregateArtistsOnReleases } from "../../outputs/AggregateArtistsOnReleases";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistsOnReleases)
export class AggregateArtistsOnReleasesResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistsOnReleases, {
    nullable: false
  })
  async aggregateArtistsOnReleases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistsOnReleasesArgs): Promise<AggregateArtistsOnReleases> {
    return getPrismaFromContext(ctx).artistsOnReleases.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
