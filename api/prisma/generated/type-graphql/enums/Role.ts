import * as TypeGraphQL from "type-graphql";

export enum Role {
  COMPOSER = "COMPOSER",
  CONDUCTOR = "CONDUCTOR",
  MAIN = "MAIN",
  GUEST = "GUEST",
  REMIXER = "REMIXER",
  DJ = "DJ",
  PRODUCER = "PRODUCER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
