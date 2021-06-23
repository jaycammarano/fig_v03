import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseUpdateInput } from "../../../inputs/ReleaseUpdateInput";
import { ReleaseWhereUniqueInput } from "../../../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseUpdateInput, {
    nullable: false
  })
  data!: ReleaseUpdateInput;

  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;
}
