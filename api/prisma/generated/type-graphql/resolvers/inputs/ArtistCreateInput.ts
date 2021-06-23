import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesCreateNestedManyWithoutArtistInput } from "../inputs/ArtistsOnReleasesCreateNestedManyWithoutArtistInput";
import { ReleaseCreateNestedManyWithoutArtistsInput } from "../inputs/ReleaseCreateNestedManyWithoutArtistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistCreateInput {
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

  @TypeGraphQL.Field(_type => ReleaseCreateNestedManyWithoutArtistsInput, {
    nullable: true
  })
  releases?: ReleaseCreateNestedManyWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateNestedManyWithoutArtistInput, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesCreateNestedManyWithoutArtistInput | undefined;
}
