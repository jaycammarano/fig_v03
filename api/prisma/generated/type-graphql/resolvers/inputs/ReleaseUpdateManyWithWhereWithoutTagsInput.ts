import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseScalarWhereInput } from "../inputs/ReleaseScalarWhereInput";
import { ReleaseUpdateManyMutationInput } from "../inputs/ReleaseUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpdateManyWithWhereWithoutTagsInput {
  @TypeGraphQL.Field(_type => ReleaseScalarWhereInput, {
    nullable: false
  })
  where!: ReleaseScalarWhereInput;

  @TypeGraphQL.Field(_type => ReleaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReleaseUpdateManyMutationInput;
}
