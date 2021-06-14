import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistListRelationFilter } from "../inputs/ArtistListRelationFilter";
import { ArtistsOnReleasesListRelationFilter } from "../inputs/ArtistsOnReleasesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReleaseTypeFilter } from "../inputs/EnumReleaseTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseWhereInput {
  @TypeGraphQL.Field(_type => [ReleaseWhereInput], {
    nullable: true
  })
  AND?: ReleaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereInput], {
    nullable: true
  })
  OR?: ReleaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseWhereInput], {
    nullable: true
  })
  NOT?: ReleaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  releaseDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReleaseTypeFilter, {
    nullable: true
  })
  type?: EnumReleaseTypeFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistListRelationFilter, {
    nullable: true
  })
  artists?: ArtistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagListRelationFilter, {
    nullable: true
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesListRelationFilter, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesListRelationFilter | undefined;
}
