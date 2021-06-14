import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseWhereUniqueInput } from "../../../inputs/ReleaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereUniqueInput, {
    nullable: false
  })
  where!: ReleaseWhereUniqueInput;
}
