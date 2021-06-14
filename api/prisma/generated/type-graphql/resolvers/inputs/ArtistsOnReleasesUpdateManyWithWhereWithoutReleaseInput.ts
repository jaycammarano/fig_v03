import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesScalarWhereInput } from "../inputs/ArtistsOnReleasesScalarWhereInput";
import { ArtistsOnReleasesUpdateManyMutationInput } from "../inputs/ArtistsOnReleasesUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpdateManyWithWhereWithoutReleaseInput {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesScalarWhereInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistsOnReleasesUpdateManyMutationInput;
}
