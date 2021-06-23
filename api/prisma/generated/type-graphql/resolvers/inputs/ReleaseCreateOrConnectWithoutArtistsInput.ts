import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateWithoutArtistsInput } from "../inputs/ReleaseCreateWithoutArtistsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateOrConnectWithoutArtistsInput {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: ReleaseCreateWithoutArtistsInput;
}
