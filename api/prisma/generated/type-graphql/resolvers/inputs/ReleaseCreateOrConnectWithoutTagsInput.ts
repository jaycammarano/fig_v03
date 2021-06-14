import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateWithoutTagsInput } from "../inputs/ReleaseCreateWithoutTagsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateOrConnectWithoutTagsInput {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseCreateWithoutTagsInput, {
    nullable: false
  })
  create!: ReleaseCreateWithoutTagsInput;
}
