import * as TypeGraphQL from "type-graphql";

export enum ReleaseScalarFieldEnum {
  id = "id",
  name = "name",
  releaseDate = "releaseDate",
  type = "type",
  image = "image",
  url = "url",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ReleaseScalarFieldEnum, {
  name: "ReleaseScalarFieldEnum",
  description: undefined,
});
