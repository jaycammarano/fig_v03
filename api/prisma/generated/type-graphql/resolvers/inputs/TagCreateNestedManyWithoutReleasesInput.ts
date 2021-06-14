import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutReleasesInput } from "../inputs/TagCreateOrConnectWithoutReleasesInput";
import { TagCreateWithoutReleasesInput } from "../inputs/TagCreateWithoutReleasesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagCreateNestedManyWithoutReleasesInput {
  @TypeGraphQL.Field(_type => [TagCreateWithoutReleasesInput], {
    nullable: true
  })
  create?: TagCreateWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutReleasesInput], {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutReleasesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereUniqueInput], {
    nullable: true
  })
  connect?: TagWhereUniqueInput[] | undefined;
}
