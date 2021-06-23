import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReleaseTypeWithAggregatesFilter } from "../inputs/EnumReleaseTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReleaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReleaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReleaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReleaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  releaseDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReleaseTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumReleaseTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  image?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
