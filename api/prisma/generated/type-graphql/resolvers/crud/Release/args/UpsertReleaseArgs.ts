import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseCreateInput } from "../../../inputs/ReleaseCreateInput";
import { ReleaseUpdateInput } from "../../../inputs/ReleaseUpdateInput";
import { ReleaseWhereUniqueInput } from "../../../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReleaseCreateInput, {
    nullable: false
  })
  create!: ReleaseCreateInput;

  @TypeGraphQL.Field(_type => ReleaseUpdateInput, {
    nullable: false
  })
  update!: ReleaseUpdateInput;
}
