import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutArtistsOnReleasesInput } from "../inputs/ArtistCreateNestedOneWithoutArtistsOnReleasesInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateWithoutReleaseInput {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "COMPOSER" | "CONDUCTOR" | "MAIN" | "GUEST" | "REMIXER" | "DJ" | "PRODUCER" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  artist?: ArtistCreateNestedOneWithoutArtistsOnReleasesInput | undefined;
}
