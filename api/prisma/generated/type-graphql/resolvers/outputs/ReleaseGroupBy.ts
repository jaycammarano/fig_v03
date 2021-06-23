import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseAvgAggregate } from "../outputs/ReleaseAvgAggregate";
import { ReleaseCountAggregate } from "../outputs/ReleaseCountAggregate";
import { ReleaseMaxAggregate } from "../outputs/ReleaseMaxAggregate";
import { ReleaseMinAggregate } from "../outputs/ReleaseMinAggregate";
import { ReleaseSumAggregate } from "../outputs/ReleaseSumAggregate";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ReleaseGroupBy {
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

  @TypeGraphQL.Field(_type => ReleaseCountAggregate, {
    nullable: true
  })
  _count!: ReleaseCountAggregate | null;

  @TypeGraphQL.Field(_type => ReleaseAvgAggregate, {
    nullable: true
  })
  _avg!: ReleaseAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReleaseSumAggregate, {
    nullable: true
  })
  _sum!: ReleaseSumAggregate | null;

  @TypeGraphQL.Field(_type => ReleaseMinAggregate, {
    nullable: true
  })
  _min!: ReleaseMinAggregate | null;

  @TypeGraphQL.Field(_type => ReleaseMaxAggregate, {
    nullable: true
  })
  _max!: ReleaseMaxAggregate | null;
}
