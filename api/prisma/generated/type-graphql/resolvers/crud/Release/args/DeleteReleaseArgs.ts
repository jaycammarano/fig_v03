import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseWhereUniqueInput } from "../../../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;
}
