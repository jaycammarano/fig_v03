import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogWhereInput {
  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  AND?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  OR?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereInput], {
    nullable: true
  })
  NOT?: BlogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TagListRelationFilter, {
    nullable: true
  })
  tags?: TagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createdBy?: StringFilter | undefined;
}
