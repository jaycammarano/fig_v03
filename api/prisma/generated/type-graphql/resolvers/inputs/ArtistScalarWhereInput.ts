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
export class ArtistScalarWhereInput {
  @TypeGraphQL.Field(_type => [ArtistScalarWhereInput], {
    nullable: true
  })
  AND?: ArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistScalarWhereInput], {
    nullable: true
  })
  OR?: ArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistScalarWhereInput], {
    nullable: true
  })
  NOT?: ArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
