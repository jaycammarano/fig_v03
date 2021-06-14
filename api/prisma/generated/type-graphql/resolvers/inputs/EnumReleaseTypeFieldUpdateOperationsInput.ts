import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReleaseType } from "../../enums/ReleaseType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumReleaseTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ReleaseType, {
    nullable: true
  })
  set?: "ALBUM" | "ANTHOLOGY" | "COMPILATION" | "CONCERT" | "DJMIX" | "EP" | "INTERVIEW" | "LIVEALBUM" | "MINIALBUM" | "MIXTAPE" | "PROMO" | "SINGLE" | "SOUNDTRACK" | "UNKNOWN" | "UNOFFICIAL" | undefined;
}
