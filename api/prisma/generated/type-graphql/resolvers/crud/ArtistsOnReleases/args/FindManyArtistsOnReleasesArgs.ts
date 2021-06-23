import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesOrderByInput } from "../../../inputs/ArtistsOnReleasesOrderByInput";
import { ArtistsOnReleasesWhereInput } from "../../../inputs/ArtistsOnReleasesWhereInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../../../inputs/ArtistsOnReleasesWhereUniqueInput";
import { ArtistsOnReleasesScalarFieldEnum } from "../../../../enums/ArtistsOnReleasesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  where?: ArtistsOnReleasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesOrderByInput], {
    nullable: true
  })
  orderBy?: ArtistsOnReleasesOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistsOnReleasesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"artistId" | "releaseId" | "role" | "createdAt"> | undefined;
}
