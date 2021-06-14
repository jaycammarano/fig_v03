import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateWithoutArtistInput";
import { ArtistsOnReleasesUpdateWithoutArtistInput } from "../inputs/ArtistsOnReleasesUpdateWithoutArtistInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpsertWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateWithoutArtistInput, {
    nullable: false
  })
  update!: ArtistsOnReleasesUpdateWithoutArtistInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateWithoutArtistInput, {
    nullable: false
  })
  create!: ArtistsOnReleasesCreateWithoutArtistInput;
}
