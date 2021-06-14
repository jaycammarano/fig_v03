import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistScalarWhereInput } from "../inputs/ArtistScalarWhereInput";
import { ArtistUpdateManyMutationInput } from "../inputs/ArtistUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistUpdateManyWithWhereWithoutReleasesInput {
  @TypeGraphQL.Field(_type => ArtistScalarWhereInput, {
    nullable: false
  })
  where!: ArtistScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistUpdateManyMutationInput;
}
