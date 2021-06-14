import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateWithoutArtistsOnReleasesInput } from "../inputs/ReleaseCreateWithoutArtistsOnReleasesInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateOrConnectWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseCreateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  create!: ReleaseCreateWithoutArtistsOnReleasesInput;
}
