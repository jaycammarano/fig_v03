import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateOrConnectWithoutTagsInput } from "../inputs/ReleaseCreateOrConnectWithoutTagsInput";
import { ReleaseCreateWithoutTagsInput } from "../inputs/ReleaseCreateWithoutTagsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateNestedManyWithoutTagsInput {
  @TypeGraphQL.Field(_type => [ReleaseCreateWithoutTagsInput], {
    nullable: true
  })
  create?: ReleaseCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: ReleaseCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  connect?: ReleaseWhereUniqueInput[] | undefined;
}
