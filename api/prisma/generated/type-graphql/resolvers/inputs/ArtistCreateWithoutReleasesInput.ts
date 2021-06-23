import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateNestedManyWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateNestedManyWithoutArtistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistCreateWithoutReleasesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateNestedManyWithoutArtistInput, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesCreateNestedManyWithoutArtistInput | undefined;
}
