import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateNestedOneWithoutArtistsOnReleasesInput } from "../inputs/ReleaseCreateNestedOneWithoutArtistsOnReleasesInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesCreateWithoutArtistInput {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "COMPOSER" | "CONDUCTOR" | "MAIN" | "GUEST" | "REMIXER" | "DJ" | "PRODUCER" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ReleaseCreateNestedOneWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  release?: ReleaseCreateNestedOneWithoutArtistsOnReleasesInput | undefined;
}
