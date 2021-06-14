import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseWhereInput } from "../../../inputs/ReleaseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  where?: ReleaseWhereInput | undefined;
}
