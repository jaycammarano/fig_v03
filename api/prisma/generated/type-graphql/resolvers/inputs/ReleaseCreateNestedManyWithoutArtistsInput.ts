import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateOrConnectWithoutArtistsInput } from "../inputs/ReleaseCreateOrConnectWithoutArtistsInput";
import { ReleaseCreateWithoutArtistsInput } from "../inputs/ReleaseCreateWithoutArtistsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateNestedManyWithoutArtistsInput {
  @TypeGraphQL.Field(_type => [ReleaseCreateWithoutArtistsInput], {
    nullable: true
  })
  create?: ReleaseCreateWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseCreateOrConnectWithoutArtistsInput], {
    nullable: true
  })
  connectOrCreate?: ReleaseCreateOrConnectWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereUniqueInput], {
    nullable: true
  })
  connect?: ReleaseWhereUniqueInput[] | undefined;
}
