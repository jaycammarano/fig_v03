import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseCreateInput } from "../../../inputs/ReleaseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseCreateInput, {
    nullable: false
  })
  data!: ReleaseCreateInput;
}
