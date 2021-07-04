import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateWithoutBlogsInput } from "../inputs/TagUpdateWithoutBlogsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagUpdateWithWhereUniqueWithoutBlogsInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagUpdateWithoutBlogsInput, {
    nullable: false
  })
  data!: TagUpdateWithoutBlogsInput;
}
