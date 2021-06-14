import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReleaseTypeFilter } from "../inputs/NestedEnumReleaseTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumReleaseTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReleaseTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReleaseTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReleaseTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumReleaseTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReleaseTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumReleaseTypeFilter | undefined;
}
