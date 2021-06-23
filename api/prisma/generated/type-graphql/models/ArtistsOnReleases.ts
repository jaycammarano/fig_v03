import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Artist } from "../models/Artist";
import { Release } from "../models/Release";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ArtistsOnReleases {
  artist?: Artist | null;

  release?: Release | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  releaseId!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "COMPOSER" | "CONDUCTOR" | "MAIN" | "GUEST" | "REMIXER" | "DJ" | "PRODUCER";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
