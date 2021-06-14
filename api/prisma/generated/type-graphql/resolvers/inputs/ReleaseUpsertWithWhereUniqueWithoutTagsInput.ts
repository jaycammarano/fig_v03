import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateWithoutTagsInput } from "../inputs/ReleaseCreateWithoutTagsInput";
import { ReleaseUpdateWithoutTagsInput } from "../inputs/ReleaseUpdateWithoutTagsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpsertWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: ReleaseUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => ReleaseCreateWithoutTagsInput, {
    nullable: false
  })
  create!: ReleaseCreateWithoutTagsInput;
}
