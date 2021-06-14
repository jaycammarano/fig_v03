import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseOrderByInput } from "../../../inputs/ReleaseOrderByInput";
import { ReleaseScalarWhereWithAggregatesInput } from "../../../inputs/ReleaseScalarWhereWithAggregatesInput";
import { ReleaseWhereInput } from "../../../inputs/ReleaseWhereInput";
import { ReleaseScalarFieldEnum } from "../../../../enums/ReleaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  where?: ReleaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReleaseOrderByInput], {
    nullable: true
  })
  orderBy?: ReleaseOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReleaseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "releaseDate" | "type" | "image" | "url" | "createdAt">;

  @TypeGraphQL.Field(_type => ReleaseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReleaseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
