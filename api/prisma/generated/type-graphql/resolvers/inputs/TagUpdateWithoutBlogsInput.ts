import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseUpdateManyWithoutTagsInput } from "../inputs/ReleaseUpdateManyWithoutTagsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagUpdateWithoutBlogsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseUpdateManyWithoutTagsInput, {
    nullable: true
  })
  releases?: ReleaseUpdateManyWithoutTagsInput | undefined;
}
