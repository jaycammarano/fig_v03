import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseCreateWithoutArtistsOnReleasesInput } from "../inputs/ReleaseCreateWithoutArtistsOnReleasesInput";
import { ReleaseUpdateWithoutArtistsOnReleasesInput } from "../inputs/ReleaseUpdateWithoutArtistsOnReleasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpsertWithoutArtistsOnReleasesInput {
  @TypeGraphQL.Field(_type => ReleaseUpdateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  update!: ReleaseUpdateWithoutArtistsOnReleasesInput;

  @TypeGraphQL.Field(_type => ReleaseCreateWithoutArtistsOnReleasesInput, {
    nullable: false
  })
  create!: ReleaseCreateWithoutArtistsOnReleasesInput;
}
