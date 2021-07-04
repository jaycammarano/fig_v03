import * as TypeGraphQL from "type-graphql";

export enum BlogScalarFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  createdAt = "createdAt",
  createdBy = "createdBy"
}
TypeGraphQL.registerEnumType(BlogScalarFieldEnum, {
  name: "BlogScalarFieldEnum",
  description: undefined,
});
