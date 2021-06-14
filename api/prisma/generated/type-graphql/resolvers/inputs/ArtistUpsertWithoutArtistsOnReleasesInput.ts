import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutArtistsOnReleasesInput } from "../inputs/ArtistCreateWithoutArtistsOnReleasesInput";
import { ArtistUpdateWithoutArtistsOnReleasesInput } from "../inputs/ArtistUpdateWithoutArtistsOnReleasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistUpsertWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ArtistUpdateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  update!: ArtistUpdateWithoutArtistsOnReleasesInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutArtistsOnReleasesInput;
}
