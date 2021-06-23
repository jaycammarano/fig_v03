import * as TypeGraphQL from "type-graphql";
import { Release } from "../../../models/Release";
import { Tag } from "../../../models/Tag";
import { TagReleasesArgs } from "./args/TagReleasesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Release], {
    nullable: false
  })
  async releases(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagReleasesArgs): Promise<Release[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).releases(args);
  }
}
