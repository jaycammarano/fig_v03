import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ReleaseMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  releaseDate!: Date | null;

  @TypeGraphQL.Field(_type => ReleaseType, {
    nullable: true
  })
  type!: "ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
