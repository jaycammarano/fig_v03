import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseUpdateWithoutArtistsInput } from "../inputs/ReleaseUpdateWithoutArtistsInput";
import { ReleaseWhereUniqueInput } from "../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpdateWithWhereUniqueWithoutArtistsInput {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseUpdateWithoutArtistsInput, {
    nullable: false
  })
  data!: ReleaseUpdateWithoutArtistsInput;
}
