import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistWhereInput } from "../inputs/ArtistWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistRelationFilter {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  is?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  isNot?: ArtistWhereInput | undefined;
}
