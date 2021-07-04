import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutTagsInput } from "../inputs/BlogUpdateWithoutTagsInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogUpdateWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutTagsInput;
}
