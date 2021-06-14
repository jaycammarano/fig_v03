import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseUpdateManyMutationInput } from "../../../inputs/ReleaseUpdateManyMutationInput";
import { ReleaseWhereInput } from "../../../inputs/ReleaseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReleaseArgs {
  @TypeGraphQL.Field(_type => ReleaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReleaseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  where?: ReleaseWhereInput | undefined;
}
