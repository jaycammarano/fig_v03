import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistWhereInput } from "../inputs/ArtistWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistListRelationFilter {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  every?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  some?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  none?: ArtistWhereInput | undefined;
}
