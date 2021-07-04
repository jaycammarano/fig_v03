import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogAvgAggregate } from "../outputs/BlogAvgAggregate";
import { BlogCountAggregate } from "../outputs/BlogCountAggregate";
import { BlogMaxAggregate } from "../outputs/BlogMaxAggregate";
import { BlogMinAggregate } from "../outputs/BlogMinAggregate";
import { BlogSumAggregate } from "../outputs/BlogSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class BlogGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => BlogCountAggregate, {
    nullable: true
  })
  _count!: BlogCountAggregate | null;

  @TypeGraphQL.Field(_type => BlogAvgAggregate, {
    nullable: true
  })
  _avg!: BlogAvgAggregate | null;

  @TypeGraphQL.Field(_type => BlogSumAggregate, {
    nullable: true
  })
  _sum!: BlogSumAggregate | null;

  @TypeGraphQL.Field(_type => BlogMinAggregate, {
    nullable: true
  })
  _min!: BlogMinAggregate | null;

  @TypeGraphQL.Field(_type => BlogMaxAggregate, {
    nullable: true
  })
  _max!: BlogMaxAggregate | null;
}
