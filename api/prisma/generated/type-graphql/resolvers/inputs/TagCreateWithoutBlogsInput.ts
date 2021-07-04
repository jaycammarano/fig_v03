import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateNestedManyWithoutTagsInput } from "../inputs/ReleaseCreateNestedManyWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagCreateWithoutBlogsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ReleaseCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  releases?: ReleaseCreateNestedManyWithoutTagsInput | undefined;
}
