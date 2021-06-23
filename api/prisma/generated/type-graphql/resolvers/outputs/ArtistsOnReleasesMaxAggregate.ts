import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ArtistsOnReleasesMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  artistId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  releaseId!: number | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role!: "COMPOSER" | "CONDUCTOR" | "MAIN" | "GUEST" | "REMIXER" | "DJ" | "PRODUCER" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
