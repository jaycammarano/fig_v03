import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereInput], {
    nullable: true
  })
  AND?: ArtistsOnReleasesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereInput], {
    nullable: true
  })
  OR?: ArtistsOnReleasesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarWhereInput], {
    nullable: true
  })
  NOT?: ArtistsOnReleasesScalarWhereInput[] | undefined;

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
