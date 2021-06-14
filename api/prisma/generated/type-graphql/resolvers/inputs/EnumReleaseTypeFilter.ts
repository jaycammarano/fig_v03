import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReleaseTypeFilter } from "../inputs/NestedEnumReleaseTypeFilter";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumReleaseTypeFilter {
  @TypeGraphQL.Field(_type => ReleaseType, {
    nullable: true
  })
  equals?: "ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL" | undefined;

  @TypeGraphQL.Field(_type => [ReleaseType], {
    nullable: true
  })
  in?: Array<"ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL"> | undefined;

  @TypeGraphQL.Field(_type => [ReleaseType], {
    nullable: true
  })
  notIn?: Array<"ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReleaseTypeFilter, {
    nullable: true
  })
  not?: NestedEnumReleaseTypeFilter | undefined;
}
