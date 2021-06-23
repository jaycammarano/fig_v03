import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneWithoutArtistsOnReleasesInput } from "../inputs/ArtistUpdateOneWithoutArtistsOnReleasesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { ReleaseUpdateOneWithoutArtistsOnReleasesInput } from "../inputs/ReleaseUpdateOneWithoutArtistsOnReleasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesUpdateInput {
  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateOneWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  artist?: ArtistUpdateOneWithoutArtistsOnReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ReleaseUpdateOneWithoutArtistsOnReleasesInput, {
    nullable: true
  })
  release?: ReleaseUpdateOneWithoutArtistsOnReleasesInput | undefined;
}
