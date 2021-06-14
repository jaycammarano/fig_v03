import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseWhereInput } from "../inputs/ReleaseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseRelationFilter {
  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  is?: ReleaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseWhereInput, {
    nullable: true
  })
  isNot?: ReleaseWhereInput | undefined;
}
