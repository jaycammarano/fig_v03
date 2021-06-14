import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesOrderByInput } from "../../../inputs/ArtistsOnReleasesOrderByInput";
import { ArtistsOnReleasesScalarWhereWithAggregatesInput } from "../../../inputs/ArtistsOnReleasesScalarWhereWithAggregatesInput";
import { ArtistsOnReleasesWhereInput } from "../../../inputs/ArtistsOnReleasesWhereInput";
import { ArtistsOnReleasesScalarFieldEnum } from "../../../../enums/ArtistsOnReleasesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  where?: ArtistsOnReleasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesOrderByInput], {
    nullable: true
  })
  orderBy?: ArtistsOnReleasesOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistsOnReleasesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"artistId" | "releaseId" | "role" | "createdAt">;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArtistsOnReleasesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
