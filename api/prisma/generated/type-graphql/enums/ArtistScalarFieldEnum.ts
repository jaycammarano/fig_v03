import * as TypeGraphQL from "type-graphql";

export enum ArtistScalarFieldEnum {
  id = "id",
  name = "name",
  image = "image",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ArtistScalarFieldEnum, {
  name: "ArtistScalarFieldEnum",
  description: undefined,
});
