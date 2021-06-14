import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArtistArgs } from "./args/AggregateArtistArgs";
import { Artist } from "../../../models/Artist";
import { AggregateArtist } from "../../outputs/AggregateArtist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Artist)
export class AggregateArtistResolver {
  @TypeGraphQL.Query(_returns => AggregateArtist, {
    nullable: false
  })
  async aggregateArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistArgs): Promise<AggregateArtist> {
    return getPrismaFromContext(ctx).artist.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
