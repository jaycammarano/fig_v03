import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ArtistsOnReleasesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ArtistsOnReleasesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ArtistsOnReleasesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  artistId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  releaseId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
