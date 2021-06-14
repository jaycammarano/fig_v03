import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesUpdateInput } from "../../../inputs/ArtistsOnReleasesUpdateInput";
import { ArtistsOnReleasesWhereUniqueInput } from "../../../inputs/ArtistsOnReleasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateInput, {
    nullable: false
  })
  data!: ArtistsOnReleasesUpdateInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistsOnReleasesWhereUniqueInput;
}
