import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistsOnReleasesUpdateManyMutationInput } from "../../../inputs/ArtistsOnReleasesUpdateManyMutationInput";
import { ArtistsOnReleasesWhereInput } from "../../../inputs/ArtistsOnReleasesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArtistsOnReleasesArgs {
  @TypeGraphQL.Field(_type => ArtistsOnReleasesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistsOnReleasesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArtistsOnReleasesWhereInput, {
    nullable: true
  })
  where?: ArtistsOnReleasesWhereInput | undefined;
}
