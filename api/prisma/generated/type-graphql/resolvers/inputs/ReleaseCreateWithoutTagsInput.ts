import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedManyWithoutReleasesInput } from "../inputs/ArtistCreateNestedManyWithoutReleasesInput";
import { ArtistsOnReleasesCreateNestedManyWithoutReleaseInput } from "../inputs/ArtistsOnReleasesCreateNestedManyWithoutReleaseInput";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseCreateWithoutTagsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => ReleaseType, {
    nullable: true
  })
  type?: "ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateNestedManyWithoutReleasesInput, {
    nullable: true
  })
  artists?: ArtistCreateNestedManyWithoutReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateNestedManyWithoutReleaseInput, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesCreateNestedManyWithoutReleaseInput | undefined;
}
