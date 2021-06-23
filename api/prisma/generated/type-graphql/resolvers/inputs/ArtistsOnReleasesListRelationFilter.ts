import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesWhereInput } from "../inputs/ArtistsOnReleasesWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesListRelationFilter {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  every?: ArtistsOnReleasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  some?: ArtistsOnReleasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  none?: ArtistsOnReleasesWhereInput | undefined;
}
