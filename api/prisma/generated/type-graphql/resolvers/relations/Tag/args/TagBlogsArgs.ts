import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogOrderByInput } from "../../../inputs/BlogOrderByInput";
import { BlogWhereInput } from "../../../inputs/BlogWhereInput";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";
import { BlogScalarFieldEnum } from "../../../../enums/BlogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagBlogsArgs {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogOrderByInput], {
    nullable: true
  })
  orderBy?: BlogOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  cursor?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "content" | "createdAt" | "createdBy"> | undefined;
}
