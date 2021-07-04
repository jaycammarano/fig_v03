import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateManyWithoutTagsInput } from "../inputs/BlogUpdateManyWithoutTagsInput";
import { ReleaseUpdateManyWithoutTagsInput } from "../inputs/ReleaseUpdateManyWithoutTagsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseUpdateManyWithoutTagsInput, {
    nullable: true
  })
  releases?: ReleaseUpdateManyWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => BlogUpdateManyWithoutTagsInput, {
    nullable: true
  })
  blogs?: BlogUpdateManyWithoutTagsInput | undefined;
}
