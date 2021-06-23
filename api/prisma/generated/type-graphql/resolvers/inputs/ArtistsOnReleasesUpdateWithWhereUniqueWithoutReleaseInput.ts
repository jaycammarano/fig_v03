import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesUpdateWithoutReleaseInput } from "../inputs/ArtistsOnReleasesUpdateWithoutReleaseInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpdateWithWhereUniqueWithoutReleaseInput {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateWithoutReleaseInput, {
    nullable: false
  })
  data!: ArtistsOnReleasesUpdateWithoutReleaseInput;
}
