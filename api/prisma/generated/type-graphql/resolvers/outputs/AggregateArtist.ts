import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistAvgAggregate } from "../outputs/ArtistAvgAggregate";
import { ArtistCountAggregate } from "../outputs/ArtistCountAggregate";
import { ArtistMaxAggregate } from "../outputs/ArtistMaxAggregate";
import { ArtistMinAggregate } from "../outputs/ArtistMinAggregate";
import { ArtistSumAggregate } from "../outputs/ArtistSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateArtist {
  @TypeGraphQL.Field(_type => ArtistCountAggregate, {
    nullable: true
  })
  _count!: ArtistCountAggregate | null;

  @TypeGraphQL.Field(_type => ArtistAvgAggregate, {
    nullable: true
  })
  _avg!: ArtistAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArtistSumAggregate, {
    nullable: true
  })
  _sum!: ArtistSumAggregate | null;

  @TypeGraphQL.Field(_type => ArtistMinAggregate, {
    nullable: true
  })
  _min!: ArtistMinAggregate | null;

  @TypeGraphQL.Field(_type => ArtistMaxAggregate, {
    nullable: true
  })
  _max!: ArtistMaxAggregate | null;
}
