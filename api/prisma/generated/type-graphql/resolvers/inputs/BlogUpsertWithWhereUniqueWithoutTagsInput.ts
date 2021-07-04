import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutTagsInput } from "../inputs/BlogCreateWithoutTagsInput";
import { BlogUpdateWithoutTagsInput } from "../inputs/BlogUpdateWithoutTagsInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogUpsertWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: BlogUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutTagsInput, {
    nullable: false
  })
  create!: BlogCreateWithoutTagsInput;
}
