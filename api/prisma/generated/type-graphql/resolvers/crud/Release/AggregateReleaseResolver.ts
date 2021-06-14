import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReleaseArgs } from "./args/AggregateReleaseArgs";
import { Release } from "../../../models/Release";
import { AggregateRelease } from "../../outputs/AggregateRelease";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Release)
export class AggregateReleaseResolver {
  @TypeGraphQL.Query(_returns => AggregateRelease, {
    nullable: false
  })
  async aggregateRelease(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReleaseArgs): Promise<AggregateRelease> {
    return getPrismaFromContext(ctx).release.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
