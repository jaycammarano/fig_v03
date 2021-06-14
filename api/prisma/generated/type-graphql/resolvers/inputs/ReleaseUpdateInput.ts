import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateManyWithoutReleasesInput } from "../inputs/ArtistUpdateManyWithoutReleasesInput";
import { ArtistsOnReleasesUpdateManyWithoutReleaseInput } from "../inputs/ArtistsOnReleasesUpdateManyWithoutReleaseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReleaseTypeFieldUpdateOperationsInput } from "../inputs/EnumReleaseTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutReleasesInput } from "../inputs/TagUpdateManyWithoutReleasesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReleaseUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  releaseDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReleaseTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumReleaseTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateManyWithoutReleasesInput, {
    nullable: true
  })
  artists?: ArtistUpdateManyWithoutReleasesInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateManyWithoutReleasesInput, {
    nullable: true
  })
  tags?: TagUpdateManyWithoutReleasesInput | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateManyWithoutReleaseInput, {
    nullable: true
  })
  artistsOnReleases?: ArtistsOnReleasesUpdateManyWithoutReleaseInput | undefined;
}
