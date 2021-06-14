import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesListRelationFilter } from "../inputs/ArtistsOnReleasesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReleaseListRelationFilter } from "../inputs/ReleaseListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistWhereInput {
  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  AND?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  OR?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  NOT?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ReleaseListRelationFilter, {
    nullable: true
  })
  releases?: ReleaseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesListRelationFilter, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
