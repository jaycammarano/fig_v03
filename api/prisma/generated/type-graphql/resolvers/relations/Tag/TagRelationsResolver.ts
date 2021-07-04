import * as TypeGraphQL from "type-graphql";
import { Blog } from "../../../models/Blog";
import { Release } from "../../../models/Release";
import { Tag } from "../../../models/Tag";
import { TagBlogsArgs } from "./args/TagBlogsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Blog], {
    nullable: false
  })
  async blogs(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagBlogsArgs): Promise<Blog[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).blogs(args);
  }
}
