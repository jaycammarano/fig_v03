import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedManyWithoutBlogsInput } from "../inputs/TagCreateNestedManyWithoutBlogsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BlogCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedManyWithoutBlogsInput, {
    nullable: true
  })
  tags?: TagCreateNestedManyWithoutBlogsInput | undefined;
}
