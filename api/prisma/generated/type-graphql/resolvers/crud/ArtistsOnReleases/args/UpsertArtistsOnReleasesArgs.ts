import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesCreateInput } from "../../../inputs/ArtistsOnReleasesCreateInput";
import { ArtistsOnReleasesUpdateInput } from "../../../inputs/ArtistsOnReleasesUpdateInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../../../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesCreateInput, {
    nullable: false
  })
  create!: ArtistsOnReleasesCreateInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateInput, {
    nullable: false
  })
  update!: ArtistsOnReleasesUpdateInput;
}
