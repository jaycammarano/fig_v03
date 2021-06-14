import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReleaseTypeFilter } from "../inputs/EnumReleaseTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReleaseScalarWhereInput], {
    nullable: true
  })
  AND?: ReleaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereInput], {
    nullable: true
  })
  OR?: ReleaseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarWhereInput], {
    nullable: true
  })
  NOT?: ReleaseScalarWhereInput[] | undefined;

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
}
