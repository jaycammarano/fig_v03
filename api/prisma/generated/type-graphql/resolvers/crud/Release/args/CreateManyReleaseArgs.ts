import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReleaseCreateManyInput } from "../../../inputs/ReleaseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReleaseArgs {
  @TypeGraphQL.Field(_type => [ReleaseCreateManyInput], {
    nullable: false
  })
  data!: ReleaseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
