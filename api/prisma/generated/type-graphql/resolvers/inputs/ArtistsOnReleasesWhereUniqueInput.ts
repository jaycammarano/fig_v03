import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistsOnReleasesArtistIdReleaseIdCompoundUniqueInput } from "../inputs/ArtistsOnReleasesArtistIdReleaseIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ArtistsOnReleasesWhereUniqueInput {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesArtistIdReleaseIdCompoundUniqueInput, {
    nullable: true
  })
  artistId_releaseId?: ArtistsOnReleasesArtistIdReleaseIdCompoundUniqueInput | undefined;
}
