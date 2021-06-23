import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseAvgAggregate } from "../outputs/ReleaseAvgAggregate";
import { ReleaseCountAggregate } from "../outputs/ReleaseCountAggregate";
import { ReleaseMaxAggregate } from "../outputs/ReleaseMaxAggregate";
import { ReleaseMinAggregate } from "../outputs/ReleaseMinAggregate";
import { ReleaseSumAggregate } from "../outputs/ReleaseSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRelease {
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
