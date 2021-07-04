import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogScalarWhereInput {
  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  AND?: BlogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  OR?: BlogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  NOT?: BlogScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createdBy?: StringFilter | undefined;
}