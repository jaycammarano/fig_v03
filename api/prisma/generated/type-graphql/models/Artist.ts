import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ArtistsOnReleases } from "../models/ArtistsOnReleases";
import { Release } from "../models/Release";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Artist {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  releases?: Release[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  artistsOnReleases?: ArtistsOnReleases[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
