import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Artist } from "../models/Artist";
import { ArtistsOnReleases } from "../models/ArtistsOnReleases";
import { Tag } from "../models/Tag";
import { ReleaseType } from "../enums/ReleaseType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Release {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => ReleaseType, {
    nullable: false
  })
  type!: "ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL";

  artists?: Artist[];

  tags?: Tag[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  artistsOnReleases?: ArtistsOnReleases[];
}
