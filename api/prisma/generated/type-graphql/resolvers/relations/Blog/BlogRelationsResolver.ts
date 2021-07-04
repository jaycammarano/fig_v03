import * as TypeGraphQL from "type-graphql";
import { Blog } from "../../../models/Blog";
import { Tag } from "../../../models/Tag";
import { BlogTagsArgs } from "./args/BlogTagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blog)
export class BlogRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() blog: Blog, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BlogTagsArgs): Promise<Tag[]> {
    return getPrismaFromContext(ctx).blog.findUnique({
      where: {
        id: blog.id,
      },
    }).tags(args);
  }
}
