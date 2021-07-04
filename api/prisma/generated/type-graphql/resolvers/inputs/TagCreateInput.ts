import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateNestedManyWithoutTagsInput } from "../inputs/BlogCreateNestedManyWithoutTagsInput";
import { ReleaseCreateNestedManyWithoutTagsInput } from "../inputs/ReleaseCreateNestedManyWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ReleaseCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  releases?: ReleaseCreateNestedManyWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BlogCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  blogs?: BlogCreateNestedManyWithoutTagsInput | undefined;
}
