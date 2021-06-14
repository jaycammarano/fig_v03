import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesAvgAggregate } from "../outputs/ArtistsOnReleasesAvgAggregate";
import { ArtistsOnReleasesCountAggregate } from "../outputs/ArtistsOnReleasesCountAggregate";
import { ArtistsOnReleasesMaxAggregate } from "../outputs/ArtistsOnReleasesMaxAggregate";
import { ArtistsOnReleasesMinAggregate } from "../outputs/ArtistsOnReleasesMinAggregate";
import { ArtistsOnReleasesSumAggregate } from "../outputs/ArtistsOnReleasesSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateArtistsOnReleases {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesCountAggregate, {
    nullable: true
  })
  _count!: ArtistsOnReleasesCountAggregate | null;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesAvgAggregate, {
    nullable: true
  })
  _avg!: ArtistsOnReleasesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesSumAggregate, {
    nullable: true
  })
  _sum!: ArtistsOnReleasesSumAggregate | null;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesMinAggregate, {
    nullable: true
  })
  _min!: ArtistsOnReleasesMinAggregate | null;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesMaxAggregate, {
    nullable: true
  })
  _max!: ArtistsOnReleasesMaxAggregate | null;
}
