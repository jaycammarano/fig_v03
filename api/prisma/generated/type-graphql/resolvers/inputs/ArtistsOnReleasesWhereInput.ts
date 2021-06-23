import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistRelationFilter } from "../inputs/ArtistRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ReleaseRelationFilter } from "../inputs/ReleaseRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesWhereInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereInput], {
    nullable: true
  })
  AND?: ArtistsOnReleasesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereInput], {
    nullable: true
  })
  OR?: ArtistsOnReleasesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesWhereInput], {
    nullable: true
  })
  NOT?: ArtistsOnReleasesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistRelationFilter, {
    nullable: true
  })
  artist?: ArtistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReleaseRelationFilter, {
    nullable: true
  })
  release?: ReleaseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  releaseId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
