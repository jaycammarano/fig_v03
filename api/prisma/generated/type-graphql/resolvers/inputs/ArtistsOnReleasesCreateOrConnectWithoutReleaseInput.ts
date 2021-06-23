import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateWithoutReleaseInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateOrConnectWithoutReleaseInput {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateWithoutReleaseInput, {
    nullable: false
  })
  create!: ArtistsOnReleasesCreateWithoutReleaseInput;
}
