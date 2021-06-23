import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutArtistsOnReleasesInput } from "../inputs/ArtistCreateWithoutArtistsOnReleasesInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistCreateOrConnectWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutArtistsOnReleasesInput;
}
