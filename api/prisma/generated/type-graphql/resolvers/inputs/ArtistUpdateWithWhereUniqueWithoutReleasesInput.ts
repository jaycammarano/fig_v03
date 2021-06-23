import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateWithoutReleasesInput } from "../inputs/ArtistUpdateWithoutReleasesInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistUpdateWithWhereUniqueWithoutReleasesInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistUpdateWithoutReleasesInput, {
    nullable: false
  })
  data!: ArtistUpdateWithoutReleasesInput;
}
