import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedManyWithoutTagsInput } from "../inputs/BlogCreateNestedManyWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagCreateWithoutReleasesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => BlogCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  blogs?: BlogCreateNestedManyWithoutTagsInput | undefined;
}
