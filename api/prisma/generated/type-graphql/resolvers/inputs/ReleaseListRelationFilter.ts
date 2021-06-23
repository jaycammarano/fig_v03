import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseWhereInput } from "../inputs/ReleaseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseListRelationFilter {
  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  every?: ReleaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  some?: ReleaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  none?: ReleaseWhereInput | undefined;
}
