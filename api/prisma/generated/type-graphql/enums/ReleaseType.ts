import * as TypeGraphQL from "type-graphql";

export enum ReleaseType {
  ALBUM = "ALBUM",
  ANTHOLOGY = "ANTHOLOGY",
  COMPILATION = "COMPILATION",
  CONCERT = "CONCERT",
  DJMIX = "DJMIX",
  EP = "EP",
  INTERVIEW = "INTERVIEW",
  LIVEALBUM = "LIVEALBUM",
  MINIALBUM = "MINIALBUM",
  MIXTAPE = "MIXTAPE",
  PROMO = "PROMO",
  SINGLE = "SINGLE",
  SOUNDTRACK = "SOUNDTRACK",
  UNKNOWN = "UNKNOWN",
  UNOFFICIAL = "UNOFFICIAL"
}
TypeGraphQL.registerEnumType(ReleaseType, {
  name: "ReleaseType",
  description: undefined,
});
